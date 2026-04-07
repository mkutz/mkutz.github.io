import { useMemo } from 'react'
import styles from './Impressum.module.css'

function ObfuscatedLink({ parts, protocol }) {
  const { href, text } = useMemo(() => ({
    href: protocol + parts.join(''),
    text: parts.join(''),
  }), [parts, protocol])

  return <a href={href}>{text}</a>
}

export default function Impressum() {
  return (
    <section id="impressum" className={styles.impressum}>
      <h2>Impressum</h2>
      <p className={styles.note}>Information according to § 5 DDG</p>

      <address className={styles.address}>
        <span>Michael Kutz</span>
        <span>Wellenstraße 53</span>
        <span>53721 Siegburg</span>
      </address>

      <div className={styles.contact}>
        <ObfuscatedLink
          protocol="mailto:"
          parts={['mail', '@', 'michael', '-', 'kutz', '.de']}
        />
        <ObfuscatedLink
          protocol="tel:+4902241"
          parts={['02241', '/', '2409657']}
        />
      </div>
    </section>
  )
}