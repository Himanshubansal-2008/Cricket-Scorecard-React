import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Score from './components/Score'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Score />
  </StrictMode>,
)
