import instagram from '../assets/instagram-logo.svg'
import github from '../assets/github-logo.png'
import linkedin from '../assets/linkedin-logo.png'
import './Footer.css'

function Footer(){
  return(
    <div className='footer'>
      <small className='footer-text'>© 2024 Veselin Hristov. All rights reserved.</small>
      <a className='instagram' href='https://instagram.com/vese.10?igshid=OGQ5ZDc2ODk2ZA==' target='_blank' rel='nooper'>
        <img className="instagram-img" src={instagram} alt="Instagram logo" /> 
      </a>
      <a className='github' href='https://github.com/Vese10' target='_blank' rel='nooper'>
        <img className="github-img" src={github} alt="GitHub logo" /> 
      </a>
      <a className='linkedin' href='https://www.linkedin.com/in/veselin-hristov-53b750216/' target='_blank' rel='nooper'>
        <img className="linkedin-img" src={linkedin} alt="LinkedIn logo" /> 
      </a>
    </div>
  )
}

export default Footer