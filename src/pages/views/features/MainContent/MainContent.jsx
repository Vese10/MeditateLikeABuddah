import { useTranslation } from 'react-i18next'
import meditateLogo from '../../../../../public/meditate-logo.svg'
import './MainContent.css'

function MainContent({ toggleGetStarted }){
  const { t } = useTranslation();

  return(
    <div className="main-content">
      <h1 className="title">{t('title')}</h1>
      <img src={meditateLogo} className='meditate-logo-main' alt='Buddah logo'></img>
      <div className="how-to-meditate">
        <h2 className='are-you-ready'>{t('are_you_ready')}</h2>
        <ol className="list">
          {t('steps', { returnObjects: true }).map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
      <button className="get-started" onClick={toggleGetStarted}>{t('get_started')}</button>
    </div>
  )
}

export default MainContent