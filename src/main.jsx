import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './lists.css'
import App from './App.jsx'

createRoot(document.getElementById('root-index')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// createRoot(document.getElementById('root-lists')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
