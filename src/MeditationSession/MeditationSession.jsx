import { useState } from 'react'
import './MeditationSession.css'
import meditateLogo from '../../public/meditate-logo.svg'
import GetStarted from '../GetStarted/GetStarted';

function MeditationSession() {
  const [stopMeditate, setStopMeditate] = useState(false)

  const handleStopMeditate = () => {
    setStopMeditate(true);
  }

  if (stopMeditate) {
    return <GetStarted />
  }

    return(
      <div className="settings">
        <img src={meditateLogo} className='meditate-logo-set'></img>
        <div className='session'>
          <p>----------</p>
          <div className='session-actions'>
            <button className='play'>play</button>
            <button className='pause'>pause</button>
            <button className='close' onClick={handleStopMeditate}>X</button>
          </div>
        </div>
      </div>
    )
}

export default MeditationSession