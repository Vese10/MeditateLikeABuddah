import { useState } from 'react'
import './GetStarted.css'
import meditateLogo from '../../public/meditate-logo.svg'
import MainContent from '../MainContent/MainContent'
import MeditationSession from '../MeditationSession/MeditationSession'
import Fire from '../assets/fire.mp3'
import Birds from '../assets/birds.mp3'
import Rain from '../assets/rain.mp3'
import Wind from '../assets/wind.mp3'
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function GetStarted({language}) {
  const [closeGetStarted, setCloseGetStarted] = useState(false);
  const [startMeditate, setStartMeditate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1);
  const [selectedSound, setSelectedSound] = useState(Fire);

  const translations = language === 'en' ? enTranslations : itTranslations;

  const handleButtonClick = () => {
    setCloseGetStarted(true);
  }

  const handleStartMeditate = () => {
    setStartMeditate(true);
  }

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value));
  };

  const handleSoundChange = (event) => {
    setSelectedSound(event.target.value);
  };

  if (closeGetStarted) {
    return <MainContent />;
  } 
  
    else if (startMeditate){

      return <MeditationSession time={selectedTime} sound={selectedSound}/>
  }

      return(
        <div className="settings">
          <img src={meditateLogo} className='meditate-logo-set' onClick={handleButtonClick}></img>
          <div className="options">
            <h2 className='personal-settings'>{translations.personal_settings}</h2>
            <form className='form' action="/action_page.php">
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
                <option value={Fire}>Fire</option>
                <option value={Birds}>Birds</option>
                <option value={Rain}>Rain</option>
                <option value={Wind}>Wind</option>
              </select>
              <input type="submit" value='Start' className='submit' onClick={handleStartMeditate}></input>
            </form>
          </div>
        </div>
      )
}

export default GetStarted