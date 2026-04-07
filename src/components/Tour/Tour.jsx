import { tourData } from '../../data/tour'
import styles from './Tour.module.css'

function TourContentItem({ item }) {
  const titleEl = item.anchor
    ? <a href={`#${item.anchor}`}>{item.title}</a>
    : item.url
      ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
      : item.title

  const extraEl = item.extra && (
    <span className={styles.coPresenter}>
      {' '}{item.extraUrl
        ? <a href={item.extraUrl} target="_blank" rel="noopener noreferrer">{item.extra}</a>
        : item.extra}
    </span>
  )

  if (item.cancelled) {
    return (
      <div className={styles.tourContentItem}>
        <span className={styles.cancelledText}>{titleEl}</span>
        {item.cancelLabel && <span className={styles.cancelLabel}>{item.cancelLabel}</span>}
        {extraEl}
      </div>
    )
  }

  return (
    <div className={styles.tourContentItem}>
      {titleEl}
      {extraEl}
    </div>
  )
}

function TourEvent({ event }) {
  const isCancelled = event.cancelled

  return (
    <div className={`${styles.tourEvent}${isCancelled ? ` ${styles.cancelledEvent}` : ''}`}>
      <div className={styles.tourDate}>{event.date}</div>
      <div className={styles.tourDetails}>
        <div className={styles.tourOccasion}>
          {isCancelled ? (
            <>
              <span className={styles.cancelledText}>{event.occasion}</span>
              {event.cancelLabel && <span className={styles.cancelLabel}>{event.cancelLabel}</span>}
            </>
          ) : event.occasionUrl ? (
            <a href={event.occasionUrl} target="_blank" rel="noopener noreferrer">{event.occasion}</a>
          ) : (
            event.occasion
          )}
        </div>
        {event.content.map((item, i) => (
          <TourContentItem key={i} item={item} />
        ))}
        {event.video && (
          <div className={styles.tourVideo}>
            <a href={event.video.url} target="_blank" rel="noopener noreferrer">{event.video.title}</a>
          </div>
        )}
        <div className={styles.tourLocation}>
          {event.originalLocation && (
            <>
              <span className={styles.cancelledText}>
                {event.originalLocationUrl
                  ? <a href={event.originalLocationUrl} target="_blank" rel="noopener noreferrer">{event.originalLocation}</a>
                  : event.originalLocation}
              </span>
              {' → '}
            </>
          )}
          {event.locationUrl
            ? <a href={event.locationUrl} target="_blank" rel="noopener noreferrer">{event.location}</a>
            : event.location}
        </div>
      </div>
    </div>
  )
}

export default function Tour() {
  return (
    <section id="tour" className={styles.tour}>
      <div className="section-inner">
        <h2>Tour</h2>
        <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          Conference appearances. Videos and slides are added to past events when available.
        </p>
        {tourData.map(({ year, events }) => (
          <div key={year} className={styles.tourYear}>
            <h3>{year}</h3>
            {events.map((event, i) => (
              <TourEvent key={i} event={event} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}