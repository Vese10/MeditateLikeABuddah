import { useState } from 'react'
import hamburgerMenu from '../assets/hamburger-menu.png'
import meditateLogo from '../../public/meditate-logo.svg'
import './Header.css'

function Header(){
  const [openMenu, setOpenMenu] = useState(true);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  return(
    <div className="header">
      <div className="language">
        <button className="ita">IT</button>
        <button className="eng">EN</button>
      </div>
      <div className="logo">
        <img src={meditateLogo} className='meditate-logo'></img>
        <p className="logo-text">Meditate Like A Buddah!</p>
      </div>
      <button className='menu-btn' onClick={handleOpenMenu}>
        <img src={hamburgerMenu} className="hamburger-menu-img"></img>
      </button>
      <ul className={`${openMenu ? "hamburger-menu" : "hamburger-menu-open"}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header