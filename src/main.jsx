import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/global.css";
import App from './App.jsx'
import { SoundProvider } from './hooks/SoundContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <SoundProvider>
    <App />
    </SoundProvider>
  </StrictMode>,
)
