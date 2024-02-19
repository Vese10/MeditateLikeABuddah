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

  return (
    <>
      <Header toggleAbout={toggleAbout} toggleContact={toggleContact} toggleMainContent={toggleMainContent}/>
      {showAbout ? <About /> : null}
      {showContact ? <Contact /> : null}
      {showMainContent ? <MainContent /> : null}
      <Footer />
    </>
  )
}

export default App
