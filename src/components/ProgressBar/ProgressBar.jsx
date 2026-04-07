import { useEffect, useState } from 'react'
import styles from './ProgressBar.module.css'

export default function ProgressBar() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const main = document.querySelector('main')
      if (!main) return
      const scrollDistance = -main.getBoundingClientRect().top
      const total = main.getBoundingClientRect().height - window.innerHeight
      const pct = Math.min(Math.max((scrollDistance / total) * 100, 0), 100)
      setWidth(pct)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return <div className={styles.progressBar} style={{ width: `${width}%` }} />
}