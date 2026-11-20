import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import './index.css'
import './transcript.css'

createRoot(document.getElementById('progress')).render(
  <StrictMode>
    <ProgressBar />
  </StrictMode>,
)

createRoot(document.getElementById('theme-toggle')).render(
  <StrictMode>
    <ThemeToggle />
  </StrictMode>,
)
