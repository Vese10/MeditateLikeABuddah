import { useState,useEffect, useRef } from 'react'
import hamburgerMenu from '../assets/hamburger-menu.png'
import meditateLogo from '../../public/meditate-logo.svg'
import './Header.css'

function Header({toggleAbout, toggleContact, toggleMainContent}){
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return(
    <header ref={menuRef}>
      <nav className="header">
        <div className="language">
          <button className="ita">IT</button>
          <button className="eng">EN</button>
        </div>
        <div className="logo" onClick={() => {toggleMainContent(); setOpenMenu(false);}}>
          <img src={meditateLogo} className='meditate-logo'></img>
          <p className="logo-text">Meditate Like A Buddah!</p>
        </div>
        <button className='menu-btn' onClick={handleOpenMenu}>
          <img src={hamburgerMenu} className="hamburger-menu-img"></img>
        </button>
        <ul className={`${openMenu ? "hamburger-menu-open" : "hamburger-menu"}`}>
          <li onClick={() => {toggleMainContent(); setOpenMenu(false);}}>Home</li>
          <li onClick={() => {toggleAbout(); setOpenMenu(false);}}>About</li>
          <li onClick={() => {toggleContact(); setOpenMenu(false);}}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header