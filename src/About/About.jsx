import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './About.css'

function About(){
  return(
    <div>
      <Header />
      <div className='about'>
        <div className='quote-one'>
          <h1>Gianluca Gotto</h1>
          <p>"Ciao"</p>
        </div>
        <div className='quote-two'>
          <h1>Confucio</h1>
          <p>"Ciao"</p>
        </div>
        <div className='quote-three'>
          <h1>Aldo Rock</h1>
          <p>"Ciao"</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About