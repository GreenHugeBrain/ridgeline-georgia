import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '../styles.css'
import Enquire from '../pages/Enquire.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Enquire />
  </StrictMode>,
)
