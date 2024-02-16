import { useState } from 'react'
import './GetStarted.css'
import meditateLogo from '../../public/meditate-logo.svg'
import MainContent from '../MainContent/MainContent'
import MeditationSession from '../MeditationSession/MeditationSession'

function GetStarted() {
  const [closeGetStarted, setCloseGetStarted] = useState(false);
  const [startMeditate, setStartMeditate] = useState(false);
  const [selectedTime, setSelectedTime] = useState(1);

  const handleButtonClick = () => {
    setCloseGetStarted(true);
  }

  const handleStartMeditate = () => {
    setStartMeditate(true);
  }

  const handleTimeChange = (event) => {
    setSelectedTime(parseInt(event.target.value));
  };

  if (closeGetStarted) {
    return <MainContent />;
  } 
  
    else if (startMeditate){

      return <MeditationSession time={selectedTime} />
  }

      return(
        <div className="settings">
          <img src={meditateLogo} className='meditate-logo-set' onClick={handleButtonClick}></img>
          <div className="options">
            <h2 className='personal-settings'>Customize your session:</h2>
            <form className='form' action="/action_page.php">
              <label htmlFor="time" className='time'>Time:</label>
              <select id="time" name="time" onChange={handleTimeChange}>
                <option value="1">1 min</option>
                <option value="2">2 min</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="20">20 min</option>
                <option value="30">30 min</option>
              </select>
              <label htmlFor="sound" className='sound'>Sound:</label>
              <select id="sound" name="sound">
                <option value="fire">Fire</option>
                <option value="birds">Birds</option>
                <option value="rain">Rain</option>
                <option value="wind">Wind</option>
              </select>
              <input type="submit" value='Start' className='submit' onClick={handleStartMeditate}></input>
            </form>
          </div>
        </div>
      )
}

export default GetStarted