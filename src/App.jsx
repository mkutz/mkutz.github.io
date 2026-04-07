import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Biography from './components/Biography/Biography'
import Tour from './components/Tour/Tour'
import Talks from './components/Talks/Talks'
import Workshops from './components/Workshops/Workshops'
import Resources from './components/Resources/Resources'
import Elsewhere from './components/Elsewhere/Elsewhere'
import Impressum from './components/Impressum/Impressum'
import ProgressBar from './components/ProgressBar/ProgressBar'

const NAV_ITEMS = [
  { id: 'biography', label: 'Biography' },
  { id: 'tour', label: 'Tour' },
  { id: 'talks', label: 'Talks' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'resources', label: 'Resources' },
  { id: 'elsewhere', label: 'Elsewhere' },
  { id: 'impressum', label: 'Impressum' },
]

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <ProgressBar />
      <Header />
      <Nav items={NAV_ITEMS} scrolled={scrolled} />
      <main>
        <Biography />
        <Tour />
        <Talks />
        <Workshops />
        <Resources />
        <Elsewhere />
        <Impressum />
      </main>
    </>
  )
}

export default App
