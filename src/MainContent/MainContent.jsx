import { useState } from 'react'
import meditateLogo from '../../public/meditate-logo.svg'
import './MainContent.css'
import GetStarted from '../GetStarted/GetStarted'

function MainContent(){
  const [showGetStarted, setShowGetStarted] = useState(false);

  const handleButtonClick = () => {
    setShowGetStarted(true);
  }

  if (showGetStarted) {
    return <GetStarted />;
  }

  return(
    <div className="main-content">
      <h1 className="title">Welcome to Meditate Like A Buddah</h1>
      <img src={meditateLogo} className='meditate-logo-main' alt='Buddah logo'></img>
      <div className="how-to-meditate">
        <h2 className='are-you-ready'>Are you ready to meditate?</h2>
        <ol className="list">
          <li>Take a seat</li>
          <li>Set a time limit</li>
          <li>Notice your body</li>
          <li>Feel your breath</li>
          <li>Notice when your mind has wandered</li>
          <li>Be kind to your wandering mind</li>
          <li>Close with kindness</li>
        </ol>
      </div>
      <button className="get-started" onClick={handleButtonClick}>Get Started</button>
    </div>
  )
}

export default MainContent