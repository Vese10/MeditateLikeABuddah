import './MeditationSession.css'
import meditateLogo from '../../public/meditate-logo.svg'

function MeditationSession() {
  return(
    <div className="settings">
      <img src={meditateLogo} className='meditate-logo-set'></img>
    </div>
  )
}

export default MeditationSession