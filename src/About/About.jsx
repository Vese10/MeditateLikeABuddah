import './About.css'

function About(){
  return(
      <div className='about'>
        <div className='intro'>
          <h1>Discover what meditation is through the words of the most wise and famous monk's and writers:</h1>
        </div>
        <div className='quote-one'>
          <h2>“The very purpose of meditation is to discipline the mind and reduce afflictive emotions.”</h2>
          <p>Dalai Lama</p>
        </div>
        <div className='quote-two'>
          <h2>“The past is gone, the future is not yet here, and if we do not go back to ourselves in the present moment, we cannot be in touch with life.”</h2>
          <p>Nhat Hanh</p>
        </div>
        <div className='quote-three'>
          <h2>“Meditation is not just blissing out under a mango tree. It completely changes your brain and therefore changes what you are.”</h2>
          <p>Matthieu Ricard</p>
        </div>
        <div className='quote-four'>
          <h2>“If every 8 year old in the world is taught meditation, we will eliminate violence from the world within one generation.”</h2>
          <p>Dalai Lama</p>
        </div>
      </div>
  )
}

export default About