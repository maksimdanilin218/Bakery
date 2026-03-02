import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
