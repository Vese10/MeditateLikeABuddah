import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import backgroundSmall from './assets/backgraound-img-small.jpg'
import backgroundBig from './assets/background-big.jpg'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='images'>  
      <img src={backgroundSmall} className='background-small' alt='Leaves'/>
      <img src={backgroundBig} className='background-big' alt='Leaves'/>
      <App />
    </div>
  </React.StrictMode>,
)
