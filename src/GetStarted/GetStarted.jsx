import { useState } from 'react'
import './GetStarted.css'
import meditateLogo from '../../public/meditate-logo.svg'
import MainContent from '../MainContent/MainContent'
import MeditationSession from '../MeditationSession/MeditationSession'

function GetStarted() {
  const [closeGetStarted, setCloseGetStarted] = useState(false);
  const [startMeditate, setStartMeditate] = useState(false);

  const handleButtonClick = () => {
    setCloseGetStarted(true);
  }

  const handleStartMeditate = () => {
    setStartMeditate(true);
  }

  if (closeGetStarted) {
    return <MainContent />;
  } 
  
    else if (startMeditate){

      return <MeditationSession />
  }

      return(
        <div className="settings">
          <img src={meditateLogo} className='meditate-logo-set' onClick={handleButtonClick}></img>
          <div className="options">
            <h2 className='personal-settings'>Customize your session:</h2>
            <form className='form' action="/action_page.php">
              <label for="time" className='time'>Time:</label>
              <select id="time" name="time">
                <option value="1">1 min</option>
                <option value="2">2 min</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="20">20 min</option>
                <option value="30">30 min</option>
              </select>
              <label for="sound" className='sound'>Sound:</label>
              <select id="sound" name="sound">
                <option value="camino">Camino</option>
                <option value="canto">Canto degli uccelli</option>
                <option value="pioggia">Pioggia battente</option>
                <option value="vento">Vento tra gli alberi</option>
              </select>
              <input type="submit" className='submit' onClick={handleStartMeditate}></input>
            </form>
          </div>
        </div>
      )
}

export default GetStarted