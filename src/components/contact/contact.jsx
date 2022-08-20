import React,{ useRef, useEffect } from 'react'
import emailjs from 'emailjs-com';
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import AOS from 'aos';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gcfasc8', 'template_5zknjol', form.current, 'wTpdccsdR_tQpKEzg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  useEffect(() => {
    AOS.init(
      {duration : 4000}
    );
    AOS.refresh();
  }, []);

  return (
    <section id="Contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="zoom-in-right">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dummyemail.com</h5>
            <a href="mailto:tarjun975@gmail.com" target={"_blank"} rel={"noreferrer"}>Send a Message</a>
          </article>

          <article className="contact__option" data-aos="zoom-in-right">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Arjun Thakur</h5>
            <a  href="https://m.me/profile.php?id=100004731976541"target={"_blank"} rel={"noreferrer"}>Send a Message</a>
          </article>

          <article className="contact__option" data-aos="zoom-in-right">
            <BsWhatsapp  className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 98828-15247</h5>
            <a target={"_blank"} rel={"noreferrer"} href="https://api.whatsapp.com/send?phone+919882815247">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact