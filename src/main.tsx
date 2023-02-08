import React from 'react'
import ReactDOM from 'react-dom/client'
import Routa from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routa />
  </BrowserRouter>
)
