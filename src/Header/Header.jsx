import { useState } from 'react'
import hamburgerMenu from '../assets/hamburger-menu.png'
import meditateLogo from '../../public/meditate-logo.svg'
import './Header.css'
import App from '../App';

function Header(){
  const [home, setHome] = useState(false);

  const handleGoHome = () => {
    setHome(true);
  }

  if (home) {
    return <App />;
  } 
  return(
    <div className="header">
      <div className="language">
        <button className="ita">IT</button>
        <button className="eng">EN</button>
      </div>
      <div className="logo" onClick={handleGoHome}>
        <img src={meditateLogo} className='meditate-logo'></img>
        <p className="logo-text">Meditate Like A Buddah!</p>
      </div>
      <button className="hamburger-menu">
        <img src={hamburgerMenu} className="hamburger-menu-img"></img>
      </button>
    </div>
  )
}

export default Header