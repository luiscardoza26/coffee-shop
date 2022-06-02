import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef as UseRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = UseRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5gcf56a', 'template_r6wyywg', form.current, 'UX8U32WPB7wNpraVm')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>luiscardoza.developer@gmail.com</h5>
            <a href="mailto:luiscardoza.developer@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>LuisTorres.DeveloperWebSite</h5>
            <a href="https://m.me/LuisTorres.DeveloperWebSite" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+573173078326</h5>
            <a href="https://api.whatsapp.com/send?phone=573173078326" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* EDN OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />

          <input type="email" name='email' placeholder='Your Email' required />

          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>

          <button type='submit' className='btn btn-form'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact