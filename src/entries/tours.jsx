import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../styles.css'
import Tours from '../pages/Tours.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tours />
  </StrictMode>,
)
