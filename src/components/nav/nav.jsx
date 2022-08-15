import {React, useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {AiFillMessage} from 'react-icons/ai'



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ""}><AiOutlineHome /></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ""}><AiOutlineUser /></a>
      <a href="#Exp" onClick={() => setActiveNav('#Exp')} className={activeNav === '#Exp' ? 'active' : ""}><BsJournalBookmarkFill /></a>
      <a href="#Portfolio" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ""}><RiServiceFill /></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ""}><AiFillMessage /></a>
      
    </nav>
  )
}

export default Nav