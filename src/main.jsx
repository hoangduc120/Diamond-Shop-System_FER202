import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Contact from './components/Contact.jsx'
import PaymentError from './components/PaymentError.jsx'
import PaymentSuccess from './components/PaymentSuccess.jsx'
import PaymentFailed from './components/PaymentFailed.jsx'
import AboutUs from './components/AboutUs.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contact/>
    <PaymentSuccess/>
    <PaymentFailed/>
    <AboutUs/>
  </React.StrictMode>,
)
