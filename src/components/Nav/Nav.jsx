import styles from './Nav.module.css'

export default function Nav({ items, scrolled }) {
  return (
    <nav className={`${styles.siteNav}${scrolled ? ` ${styles.scrolled}` : ''}`}>
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}