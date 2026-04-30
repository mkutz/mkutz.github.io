import ThemeToggle from '../ThemeToggle/ThemeToggle'
import styles from './Nav.module.css'

const SECTION_COLORS = {
  biography: 'var(--color-section-red)',
  tour: 'var(--color-section-orange)',
  talks: 'var(--color-section-yellow)',
  workshops: 'var(--color-section-green)',
  resources: 'var(--color-section-blue)',
  elsewhere: 'var(--color-section-indigo)',
  impressum: 'var(--color-section-violet)',
}

export default function Nav({ items, scrolled }) {
  return (
    <nav className={`${styles.siteNav}${scrolled ? ` ${styles.scrolled}` : ''}`}>
      <ul>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={styles.navLink}
              style={{ '--nav-color': SECTION_COLORS[id] }}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}