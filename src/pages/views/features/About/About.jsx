import { useTranslation } from 'react-i18next'
import './About.css'

function About(){
  const { t } = useTranslation();

  return(
      <div className='about'>
        <div className='intro'>
          <h1>{t('intro')}</h1>
        </div>
        <div className='quote-one'>
          <h2>{t('quote1')}</h2>
          <p>Dalai Lama</p>
        </div>
        <div className='quote-two'>
          <h2>{t('quote2')}</h2>
          <p>Nhat Hanh</p>
        </div>
        <div className='quote-three'>
          <h2>{t('quote3')}</h2>
          <p>Matthieu Ricard</p>
        </div>
        <div className='quote-four'>
          <h2>{t('quote4')}</h2>
          <p>Dalai Lama</p>
        </div>
      </div>
  )
}

export default About