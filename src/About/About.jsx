import { useState, useEffect } from 'react';
import './About.css'
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function About({language}){
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    if (language === 'en') {
      setTranslations(enTranslations);
    } else if (language === 'it') {
      setTranslations(itTranslations);
    }
  }, [language]);

  return(
      <div className='about'>
        <div className='intro'>
          <h1>{translations.intro}</h1>
        </div>
        <div className='quote-one'>
          <h2>{translations.quote1}</h2>
          <p>Dalai Lama</p>
        </div>
        <div className='quote-two'>
          <h2>{translations.quote2}</h2>
          <p>Nhat Hanh</p>
        </div>
        <div className='quote-three'>
          <h2>{translations.quote3}</h2>
          <p>Matthieu Ricard</p>
        </div>
        <div className='quote-four'>
          <h2>{translations.quote4}</h2>
          <p>Dalai Lama</p>
        </div>
      </div>
  )
}

export default About