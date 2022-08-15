import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Exp from './components/expirence/exp'
// import Services from './components/services/services'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Exp />
        {/* <Services /> */}
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App