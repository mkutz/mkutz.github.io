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

  const content = marked.parse(markdown)
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
