import { elsewhereLinks } from '../../data/elsewhere'
import styles from './Elsewhere.module.css'

export default function Elsewhere() {
  return (
    <section id="elsewhere" className={styles.elsewhere}>
      <div className="section-inner">
        <h2>Elsewhere</h2>
        <ul className={styles.elsewhereList}>
          {elsewhereLinks.map((link, i) => (
            <li key={i}>
              <a href={link.url} target="_blank" rel={link.rel ? `${link.rel} noopener noreferrer` : 'noopener noreferrer'}>
                <img src={`/${link.icon}`} alt="" width="20" height="20" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}