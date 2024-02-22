import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [language, setLanguage] = useState('en')

  const toggleAbout = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowMainContent(false);
  }

  const toggleContact = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowMainContent(false);
  }

  const toggleMainContent = () => {
    setShowMainContent(true);
    setShowAbout(false);
    setShowContact(false);
  }

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  }

  return (
    <>
      <Header toggleAbout={toggleAbout} toggleContact={toggleContact} toggleMainContent={toggleMainContent} changeLanguage={changeLanguage}/>
      {showAbout ? <About language={language}/> : null}
      {showContact ? <Contact language={language}/> : null}
      {showMainContent ? <MainContent language={language} /> : null}
      <Footer language={language}/>
    </>
  )
}

export default App
