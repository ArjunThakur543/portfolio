import React from 'react'
import './header.css'
import CTA from "./CTA"
import HeaderSocials from './HeaderSocials'
import ME from "./../../assets/me.png"
import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Header  ()  {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Mechanical Engineer", "Front-end Developer", "Tech. Enthusiast"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <header id='Home'>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Arjun Thakur</h1>
        <h3 className="text-light">
          <span ref={el}></span>
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
