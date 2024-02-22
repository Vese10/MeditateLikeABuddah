import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import MainContent from './MainContent/MainContent'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import GetStarted from './GetStarted/GetStarted'
import MeditationSession from './MeditationSession/MeditationSession'

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [startMeditate, setStartMeditate] = useState(false);
  const [language, setLanguage] = useState('en')
  const [meditationTime, setMeditationTime] = useState(1);
  const [meditationSound, setMeditationSound] = useState(null);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowContact(false);
    setShowMainContent(false);
    setShowGetStarted(false);
  }

  const toggleContact = () => {
    setShowContact(true);
    setShowAbout(false);
    setShowMainContent(false);
    setShowGetStarted(false);
  }

  const toggleMainContent = () => {
    setShowMainContent(true);
    setShowAbout(false);
    setShowContact(false);
    setShowGetStarted(false);
    setStartMeditate(false);
  }

  const toggleGetStarted = () => {
    setShowGetStarted(true);
    setShowMainContent(false);
    setStartMeditate(false);
  }

  const toggleMeditationSession = (time, sound) => {
    setMeditationTime(time);
    setMeditationSound(sound);
    setStartMeditate(true);
    setShowGetStarted(false);
    setShowMainContent(false);
  }

  const changeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  }

  return (
    <>
      <Header toggleAbout={toggleAbout} toggleContact={toggleContact} toggleMainContent={toggleMainContent} changeLanguage={changeLanguage}/>
      {showAbout ? <About language={language}/> : null}
      {showContact ? <Contact language={language}/> : null}
      {showMainContent ? <MainContent toggleGetStarted={toggleGetStarted} language={language} /> : null}
      {showGetStarted ? <GetStarted toggleMainContent={toggleMainContent} toggleMeditationSession={toggleMeditationSession} language={language}/> : null}
      {startMeditate ? <MeditationSession time={meditationTime} sound={meditationSound} toggleGetStarted={toggleGetStarted} /> :null}
      <Footer language={language}/>
    </>
  )
}

export default App
