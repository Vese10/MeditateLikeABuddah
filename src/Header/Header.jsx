import { useState,useEffect, useRef } from 'react'
import meditateLogo from '../../public/meditate-logo.svg'
import './Header.css'
import hamburgerMenu from '../assets/hamburger-menu.png'
import hamburgerMenuClose from '../assets/hamburger-menu-closed.svg'

function Header({toggleAbout, toggleContact, toggleMainContent, changeLanguage}){
  const [openMenu, setOpenMenu] = useState(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);
  const menuRef = useRef(null);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  }

  const handleOpenHamburgerMenu = () => {
    setOpenHamburgerMenu(!openHamburgerMenu);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false); 
        setOpenHamburgerMenu(false);
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
          <button className="ita" onClick={() => changeLanguage('it')}>IT</button>
          <button className="eng" onClick={() => changeLanguage('en')}>EN</button>
        </div>
        <div className="logo" onClick={() => {toggleMainContent(); setOpenMenu(false); setOpenHamburgerMenu(false);}}>
          <img src={meditateLogo} className='meditate-logo'></img>
          <p className="logo-text">Meditate Like A Buddah!</p>
        </div>
        <button className='menu-btn' onClick={() => {handleOpenMenu(); handleOpenHamburgerMenu();}}>
          <img src={`${openHamburgerMenu ? hamburgerMenuClose : hamburgerMenu}`} className="hamburger-menu-img"></img>
        </button>
        <ul className={`${openMenu ? "hamburger-menu-open" : "hamburger-menu"}`}>
          <li onClick={() => {toggleMainContent(); setOpenMenu(false); setOpenHamburgerMenu(false);}}>Home</li>
          <li onClick={() => {toggleAbout(); setOpenMenu(false); setOpenHamburgerMenu(false);}}>About</li>
          <li onClick={() => {toggleContact(); setOpenMenu(false); setOpenHamburgerMenu(false);}}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header