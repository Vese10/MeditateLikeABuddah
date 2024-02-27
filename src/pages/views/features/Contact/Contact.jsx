import { useTranslation } from 'react-i18next'
import { useState, } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitMessage(t('sending'));

    try {
      await emailjs.sendForm('service_0e7u904', 'template_ccrdvml', e.target, 'tMJ6iLYRPLiPo_2pi');
      setSubmitMessage(t('message_ok'));
      setTimeout(() => {
        setSubmitMessage('');
        e.target.reset();
        setSubmitting(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitMessage(t('messege_error'));
      setSubmitting(false);
    }
  };

  return (
    <div className='contact'>
      <form className='contact-form' onSubmit={handleSubmit}>
        <h1 className='contact-me'>{t('contact_me')}</h1>
        <p className='feel-free'>{t('invitation')}</p>
        <label htmlFor='user_name'>{t('name')}</label>
        <input type='text' id='user_name' name='user_name' placeholder={t('placeholder_name')} required/>

        <label htmlFor='user_email'>Email:</label>
        <input type='email' id='user_email' name='user_email' placeholder='example@gmail.com:' required/>
        
        <label htmlFor='message'>{t('message')}</label>
        <textarea id='message' name='message' placeholder={t('placeholder_message')} required/>
        
        <button type='submit' className='submit-form' disabled={submitting}>
          {submitting ? submitMessage : t('submit')}
        </button>
      </form>
    </div>
  );
}

export default Contact;