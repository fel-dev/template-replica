import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const mount = document.getElementById('react-app')

if (!mount) {
  throw new Error('Missing #react-app mount element')
}

createRoot(mount).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
