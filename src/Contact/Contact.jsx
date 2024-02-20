import './Contact.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage('Just a moment...');

    try {
      await emailjs.sendForm('service_0e7u904', 'template_ccrdvml', e.target, 'tMJ6iLYRPLiPo_2pi');
      setSubmitMessage('Message Sent Successfully');
      setTimeout(() => {
        setSubmitMessage('');
        e.target.reset();
        setSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage('Something Went Wrong');
      setSubmitting(false);
    }
  };

  return (
    <div className='contact'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h1 className='contact-me'>Contact Me</h1>
        <p className='feel-free'>Feel free to send me a message about anything you need, from information about my project to collaborations. I would love to hear from you!</p>
        <label htmlFor='user_name'>Name:</label>
        <input type='text' id='user_name' name='user_name' placeholder='Your name:' required/>

        <label htmlFor='user_email'>Email:</label>
        <input type='email' id='user_email' name='user_email' placeholder='example@gmail.com:' required/>
        
        <label htmlFor='message'>Message:</label>
        <textarea id='message' name='message' placeholder='Enter your message...' required/>
        
        <button type='submit' className='submit-form' disabled={submitting}>
          {submitting ? submitMessage : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default Contact;