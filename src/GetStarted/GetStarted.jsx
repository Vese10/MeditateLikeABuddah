import './GetStarted.css'
import meditateLogo from '../../public/meditate-logo.svg'

function GetStarted() {
  return(
    <div className="settings">
      <img src={meditateLogo} className='meditate-logo-set'></img>
      <div className="options">
        <h2 className='personal-settings'>Customize your session:</h2>
        <label>Time:</label>
        <input type='text' name='time'></input>
        <label>Sound:</label>
        <input type='text' name='time'></input>
      </div>
      <button className="begin">Begin</button>
    </div>
  )
}

export default GetStarted