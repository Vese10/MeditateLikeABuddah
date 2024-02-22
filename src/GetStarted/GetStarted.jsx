import { useState } from 'react'
import './GetStarted.css'
import meditateLogo from '../../public/meditate-logo.svg'
import Fire from '../assets/fire.mp3'
import Birds from '../assets/birds.mp3'
import Rain from '../assets/rain.mp3'
import Wind from '../assets/wind.mp3'
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function GetStarted({toggleMainContent, toggleMeditationSession, language}) {
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedSound, setSelectedSound] = useState(Fire);

  const translations = language === 'en' ? enTranslations : itTranslations;

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value));
  };

  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleMeditationSession(selectedTime, selectedSound);
  };

      return(
        <div className="settings">
          <img src={meditateLogo} className='meditate-logo-set' onClick={toggleMainContent}></img>
          <div className="options">
            <h2 className='personal-settings'>{translations.personal_settings}</h2>
            <form className='form' onSubmit={handleSubmit}>
              <label htmlFor="time" className='time'>{translations.time}</label>
              <select id="time" name="time" onChange={handleTimeChange}>
                <option value="1">1 min</option>
                <option value="2">2 min</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="20">20 min</option>
                <option value="30">30 min</option>
              </select>
              <label htmlFor="sound" className='sound'>{translations.sound}</label>
              <select id="sound" name="sound"  onChange={handleSoundChange}>
                <option value={Fire}>{translations.fire}</option>
                <option value={Birds}>{translations.birds}</option>
                <option value={Rain}>{translations.rain}</option>
                <option value={Wind}>{translations.wind}</option>
              </select>
              <input type="submit" value='Start' className='submit'></input>
            </form>
          </div>
        </div>
      )
}

export default GetStarted