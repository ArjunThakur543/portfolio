import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
// import {AiFillDribbbleCircle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/arjun-thakur-406980229/" target="_blank" rel={"noreferrer"}><BsLinkedin /></a>
        <a href="https://github.com/ArjunThakur543" target="_blank" rel={"noreferrer"}><BsGithub /></a>
        {/* <a href="dribble.com" target="_blank"><AiFillDribbbleCircle /></a> */}
    </div>
  )
}

export default HeaderSocials