import hamburgerMenu from '../assets/hamburger-menu.png'
import './Header.css'

function Header(){
  return(
    <div className="header">
      <div className="language">
        <button className="ita">IT</button>
        <button className="eng">EN</button>
      </div>
      <div className="logo">
        <p className="logo-text">Meditate Like A Buddah!</p>
      </div>
      <button className="hamburger-menu">
        <img src={hamburgerMenu} className="hamburger-menu-img"></img>
      </button>
    </div>
  )
}

export default Header