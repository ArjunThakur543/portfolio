import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#Home" className='footer__logo'>Arjun</a>
      <ul className="permalinks">
        <li><a href="#Home">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Exp">Experience</a></li>
        {/* <li><a href="#Services">Services</a></li> */}
        <li><a href="#Portfolio">Portfolio</a></li>
        {/* <li><a href="#Testimonials">Testimonials</a></li> */}
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100004731976541"><FaFacebook /></a>
        <a href="https://www.instagram.com/arjun_thaqur/"><FiInstagram /></a>
        <a href="https://twitter.com/Arjun_Thaqur"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arjun Thakur. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer