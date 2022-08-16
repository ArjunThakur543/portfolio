import React from 'react'
import './header.css'
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import ME from "./../../assets/me.png"
import Typed from 'react-typed';

const Header = () => {
  return (
    <header id='Home'>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Arjun Thakur</h1>
        <h3 className="text-light">
        <Typed
          strings={['Mechanical Engineer','Front-end Developer','Python Enthusiast']}
          typeSpeed={100}
          loop = {true}
          smartBackspace = {true}
          backSpeed = {40}
        /> 
        </h3>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#Contact" className='scroll__down'> Scroll Down </a>

      </div>

    </header>
  )
}

export default Header