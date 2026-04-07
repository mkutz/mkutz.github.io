import { resources } from '../../data/elsewhere'
import styles from './Resources.module.css'

export default function Resources() {
  return (
    <section id="resources" className={styles.resources}>
      <div className="section-inner">
        <h2>Resources</h2>
        <ul className={styles.resourcesList}>
        {resources.map((res, i) => (
          <li key={i}>
            <a href={res.url}>{res.label}</a>
            {res.description && (
              <span className={styles.resourceDescription}>
                {' '}
                {res.descriptionAnchor
                  ? <>from <a href={`#${res.descriptionAnchor}`}>{res.description.replace('from ', '')}</a></>
                  : res.description}
              </span>
            )}
          </li>
        ))}
      </ul>
      </div>
    </section>
  )
}