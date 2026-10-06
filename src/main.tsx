import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

const mount = document.getElementById('site-header')

if (!mount) {
  throw new Error('Missing #site-header mount element')
}

createRoot(mount).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
