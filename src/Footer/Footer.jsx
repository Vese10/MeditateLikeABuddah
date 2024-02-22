import instagram from '../assets/instagram-logo.svg'
import github from '../assets/github-logo.png'
import linkedin from '../assets/linkedin-logo.png'
import './Footer.css'
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function Footer({language}){

  const translations = language === 'en' ? enTranslations : itTranslations;

  return(
    <div className='footer'>
      <div className='social-logos'>
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
      <small className='footer-text'>{translations.rights}</small>
    </div>
  )
}

export default Footer