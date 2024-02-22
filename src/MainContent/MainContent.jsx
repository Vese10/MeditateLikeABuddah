import { useState } from 'react'
import meditateLogo from '../../public/meditate-logo.svg'
import './MainContent.css'
import GetStarted from '../GetStarted/GetStarted'
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function MainContent({language}){
  const [showGetStarted, setShowGetStarted] = useState(false);

  const translations = language === 'en' ? enTranslations : itTranslations;

  const handleButtonClick = () => {
    setShowGetStarted(true);
  }

  if (showGetStarted) {
    return <GetStarted />;
  }

  return(
    <div className="main-content">
      <h1 className="title">{translations.title}</h1>
      <img src={meditateLogo} className='meditate-logo-main' alt='Buddah logo'></img>
      <div className="how-to-meditate">
        <h2 className='are-you-ready'>{translations.are_you_ready}</h2>
        <ol className="list">
          {translations.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <button className="get-started" onClick={handleButtonClick}>{translations.get_started}</button>
    </div>
  )
}

export default MainContent