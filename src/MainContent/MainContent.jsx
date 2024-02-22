import { useState } from 'react'
import meditateLogo from '../../public/meditate-logo.svg'
import './MainContent.css'
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function MainContent({toggleGetStarted, language}){

  const translations = language === 'en' ? enTranslations : itTranslations;

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
      <button className="get-started" onClick={toggleGetStarted}>{translations.get_started}</button>
    </div>
  )
}

export default MainContent