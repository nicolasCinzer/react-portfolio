import React from 'react';
import './contact.css';
import { MdAlternateEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Catch me up!</h5>
      <h2>Contact</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdAlternateEmail />
            <h4>Gmail</h4>
            <h5 className='text-light'>nicolas.cinzer00@gmail.com</h5>
            <a href='mailto:nicolas.cinzer00@gmail.com'>Send me a message!</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+1553324751</h5>
            <a href='https://api.whatsapp.com/send?phone=+541553324751'>
              Send me a message!
            </a>
          </article>
          <article className='contact__option'></article>
        </div>
        <form action=''></form>
      </div>
    </section>
  );
};

export default Contact;
