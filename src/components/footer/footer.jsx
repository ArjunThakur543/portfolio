import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Arjun</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Exp">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="facebook.com"><FaFacebook /></a>
        <a href="instagram.com"><FiInstagram /></a>
        <a href="twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Arjun Thakur. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer