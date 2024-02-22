import './Contact.css';
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import enTranslations from '../Language/en.json'
import itTranslations from '../Language/it.json'

function Contact({language}) {
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    if (language === 'en') {
      setTranslations(enTranslations);
    } else if (language === 'it') {
      setTranslations(itTranslations);
    }
  }, [language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(translations.sending);

    try {
      await emailjs.sendForm('service_0e7u904', 'template_ccrdvml', e.target, 'tMJ6iLYRPLiPo_2pi');
      setSubmitMessage(translations.message_ok);
      setTimeout(() => {
        setSubmitMessage('');
        e.target.reset();
        setSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage(translations.messege_error);
      setSubmitting(false);
    }
  };

  return (
    <div className='contact'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h1 className='contact-me'>{translations.contact_me}</h1>
        <p className='feel-free'>{translations.invitation}</p>
        <label htmlFor='user_name'>{translations.name}</label>
        <input type='text' id='user_name' name='user_name' placeholder={translations.placeholder_name} required/>

        <label htmlFor='user_email'>Email:</label>
        <input type='email' id='user_email' name='user_email' placeholder='example@gmail.com:' required/>
        
        <label htmlFor='message'>{translations.message}</label>
        <textarea id='message' name='message' placeholder={translations.placeholder_message} required/>
        
        <button type='submit' className='submit-form' disabled={submitting}>
          {submitting ? submitMessage : translations.submit}
        </button>
      </form>
    </div>
  );
}

export default Contact;