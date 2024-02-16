import './Contact.css'

function Contact() {
  return(
    <div className='contact'>
      <form className='contact-form'>
        <label name='name'>Name:</label>
        <input type='text'></input>
        <label name='name'>Surname:</label>
        <input type='text'></input>
      </form>
    </div>
  )
}

export default Contact