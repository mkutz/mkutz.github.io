import { workshops } from '../../data/workshops'
import styles from '../shared/Card.module.css'
import sectionStyles from './Workshops.module.css'

function WorkshopCard({ workshop }) {
  return (
    <article id={workshop.id} className={styles.card}>
      <h3>
        {workshop.title}
        {workshop.coPresenter && (
          <span className={styles.coPresenter}>
            {' '}with{' '}
            {workshop.coPresenterUrl
              ? <a href={workshop.coPresenterUrl} target="_blank" rel="noopener noreferrer">{workshop.coPresenter}</a>
              : workshop.coPresenter}
          </span>
        )}
      </h3>
      {workshop.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {workshop.keyLearnings && (
        <>
          <h4>Key Learnings</h4>
          <ul>
            {workshop.keyLearnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {workshop.materials && (
        <div className={styles.materials}>
          {workshop.materials.map((mat, i) => (
            <a key={i} href={mat.url} target={mat.url.startsWith('http') ? '_blank' : undefined} rel={mat.url.startsWith('http') ? 'noopener noreferrer' : undefined}>
              {mat.label}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function Workshops() {
  return (
    <section id="workshops" className={sectionStyles.workshops}>
      <div className="section-inner">
        <h2>Workshops</h2>
        <div className={styles.cardGrid}>
          {workshops.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  )
}