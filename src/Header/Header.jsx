import { useState,useEffect, useRef } from 'react'
import hamburgerMenu from '../assets/hamburger-menu.png'
import meditateLogo from '../../public/meditate-logo.svg'
import './Header.css'
import About from '../About/About'

function Header(){
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);
  const [openAbout, setOpenAbout] = useState(false);

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

  const handleOpenAbout = () => {
    setOpenAbout(true);
  }

  if (openAbout) {
    return <About />;
  }

  return(
    <header ref={menuRef}>
      <nav className="header">
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
        <ul className={`${openMenu ? "hamburger-menu-open" : "hamburger-menu"}`}>
          <li>Home</li>
          <li onClick={handleOpenAbout}>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header