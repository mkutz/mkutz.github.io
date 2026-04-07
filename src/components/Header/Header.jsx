import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.siteHeader}>
      <h1>Michael Kutz</h1>
      <p className={styles.subtitle}>Software Engineer &middot; QA Coach &middot; Speaker</p>
    </header>
  )
}