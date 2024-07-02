import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import FAQ from './components/FAQ.jsx'
import Checkout from './components/Checkout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FAQ/>
    <Checkout/>
  </React.StrictMode>,
)
