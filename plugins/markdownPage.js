import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { Marked } from 'marked'

const TOC_PLACEHOLDER = '<!-- markdown:toc -->'
const CONTENT_PLACEHOLDER = '<!-- markdown:content -->'
const MARKDOWN_FILE = 'transcript.md'

// Slides are exported at 1920×1080 and converted to 1400px wide WebP.
const IMAGE_WIDTH = 1400
const IMAGE_HEIGHT = 788

function escapeAttr(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function slugify(html) {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

function isImageParagraph(token) {
  return token.type === 'paragraph' && token.tokens.length === 1 && token.tokens[0].type === 'image'
}

function isInvisible(token) {
  return token.type === 'space' || (token.type === 'html' && /^\s*<!--[\s\S]*-->\s*$/.test(token.raw))
}

/**
 * Groups the top-level tokens into segments: the slide(s) shown at a point in
 * the talk plus the text spoken until the next slide or heading. Headings
 * stand on their own between segments. This lets CSS put slides beside the
 * text they belong to.
 */
function renderSegments(marked, tokens) {
  const blocks = []
  let segment = null

  const closeSegment = () => {
    const previous = blocks.at(-1)
    if (segment && !segment.hasText && previous?.figures) {
      // Slides with no text after them (e.g. right before a heading) are
      // stacked below the previous segment's slides instead of standing alone.
      previous.figures.push(...segment.figures)
      previous.body.push(...segment.body)
    } else if (segment) {
      blocks.push(segment)
    }
    segment = null
  }

  for (const token of tokens) {
    if (token.type === 'heading') {
      closeSegment()
      blocks.push({ heading: token })
    } else if (isImageParagraph(token)) {
      if (!segment || segment.hasText) {
        closeSegment()
        segment = { figures: [], body: [], hasText: false }
      }
      segment.figures.push(token)
    } else {
      segment ??= { figures: [], body: [], hasText: false }
      segment.body.push(token)
      if (!isInvisible(token)) segment.hasText = true
    }
  }
  closeSegment()

  return blocks
    .map((block) => {
      if (block.heading) return marked.parser([block.heading])
      const slides = block.figures.length
        ? `<div class="segment-slides">${marked.parser(block.figures)}</div>`
        : ''
      return `<div class="segment">${slides}<div class="segment-text">${marked.parser(block.body)}</div></div>\n`
    })
    .join('')
}

export function renderMarkdown(markdown) {
  const toc = []
  let imageCount = 0

  const marked = new Marked({
    renderer: {
      heading({ tokens, depth }) {
        const html = this.parser.parseInline(tokens)
        const id = slugify(html)
        if (depth === 2) toc.push({ id, html })
        return `<h${depth} id="${id}">${html}</h${depth}>\n`
      },
      image({ href, text }) {
        const loading = imageCount++ === 0 ? 'eager' : 'lazy'
        return `<img src="${escapeAttr(href)}" alt="${escapeAttr(text)}" width="${IMAGE_WIDTH}" height="${IMAGE_HEIGHT}" loading="${loading}" decoding="async">`
      },
      paragraph({ tokens }) {
        const html = this.parser.parseInline(tokens)
        const onlyImage = tokens.length === 1 && tokens[0].type === 'image'
        return onlyImage ? `<figure>${html}</figure>\n` : `<p>${html}</p>\n`
      },
    },
  })

  const content = renderSegments(marked, marked.lexer(markdown))
  const tocHtml = `<ol>${toc.map(({ id, html }) => `<li><a href="#${id}">${html}</a></li>`).join('')}</ol>`
  return { content, toc: tocHtml }
}

/**
 * Renders a `transcript.md` next to an HTML page into that page at build time,
 * replacing the `<!-- markdown:toc -->` and `<!-- markdown:content -->` placeholders.
 */
export default function markdownPage() {
  return {
    name: 'markdown-page',
    transformIndexHtml: {
      order: 'post',
      handler(html, ctx) {
        if (!html.includes(CONTENT_PLACEHOLDER)) return html
        const markdownPath = join(dirname(ctx.filename), MARKDOWN_FILE)
        const { content, toc } = renderMarkdown(readFileSync(markdownPath, 'utf-8'))
        return html.replace(TOC_PLACEHOLDER, toc).replace(CONTENT_PLACEHOLDER, content)
      },
    },
    configureServer(server) {
      server.watcher.on('change', (file) => {
        if (file.endsWith(`/${MARKDOWN_FILE}`)) server.ws.send({ type: 'full-reload' })
      })
    },
  }
}
