import { talks } from '../../data/talks'
import styles from '../shared/Card.module.css'

function TalkCard({ talk }) {
  return (
    <article id={talk.id} className={styles.card}>
      <h3>
        {talk.title}
        {talk.subtitle && <> ({talk.subtitle})</>}
        {talk.coPresenter && <span className={styles.coPresenter}> with {talk.coPresenter}</span>}
      </h3>
      {talk.paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      {talk.keyLearnings && (
        <>
          <h4>Key Learnings</h4>
          <ul>
            {talk.keyLearnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {talk.materials && (
        <div className={styles.materials}>
          {talk.materials.map((mat, i) => (
            <a key={i} href={mat.url} target="_blank" rel="noopener noreferrer">
              {mat.label}
              {mat.note && <span style={{ fontWeight: 400, opacity: 0.6 }}> ({mat.note})</span>}
            </a>
          ))}
        </div>
      )}
    </article>
  )
}

export default function Talks() {
  return (
    <section id="talks">
      <h2>Talks</h2>
      <div className={styles.cardGrid}>
        {talks.map((talk) => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>
    </section>
  )
}