import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import Header from './theme/Header'
import MainContent from './pages/views/features/MainContent/MainContent'
import About from './pages/views/features/About/About'
import Contact from './pages/views/features/Contact/Contact'
import Footer from './theme/Footer'
import GetStarted from './components/GetStarted/GetStarted'
import MeditationSession from './components/MeditationSession/MeditationSession'

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true);
  const [showGetStarted, setShowGetStarted] = useState(false);
  const [startMeditate, setStartMeditate] = useState(false);
  const [meditationTime, setMeditationTime] = useState(1);
  const [meditationSound, setMeditationSound] = useState(null);
  const { i18n } = useTranslation();

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
    i18n.changeLanguage(selectedLanguage);
  }

  return (
    <>
      <Header toggleAbout={toggleAbout} toggleContact={toggleContact} toggleMainContent={toggleMainContent} changeLanguage={changeLanguage}/>
      {showAbout ? <About /> : null}
      {showContact ? <Contact /> : null}
      {showMainContent ? <MainContent toggleGetStarted={toggleGetStarted} /> : null}
      {showGetStarted ? <GetStarted toggleMainContent={toggleMainContent} toggleMeditationSession={toggleMeditationSession}/> : null}
      {startMeditate ? <MeditationSession time={meditationTime} sound={meditationSound} toggleGetStarted={toggleGetStarted} toggleMeditationSession={toggleMeditationSession} toggleMainContent={toggleMainContent}/> :null}
      <Footer />
    </>
  )
}

export default App
