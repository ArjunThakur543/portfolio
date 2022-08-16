import React from "react";
import "./about.css";
import ME from "./../../assets/me-about.jpg";
import { RiAwardFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { RiFolder3Fill } from "react-icons/ri";

const About = () => {
  return (
    <section id="About">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="image" className="about__me-image" />
        </div>
        <div className="about__contant">
          <div className="about__cards">
            {/* <article className="about__card">
              <RiAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>Many Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>People</h5>
              <small>Many </small>
            </article>
            <article className="about__card">
              <RiFolder3Fill className="about__icon" />
              <h5>Projects</h5>
              <small>Many Years</small>
            </article> */}
          </div>
          <p className="about__content">
            I am a student, persuing B.Tech from National Institute of
            Technology , Hamirpur in Mechanical Engineering. I am a tech
            enthusiast with dire interest in new technical advancements.
            <br />
            <br />I am a front-end developer with much experience and also can
            work on different frameworks like ReactJs Angular and Django. I also
            have experience of creating projects in python using object
            orientation programming.
          </p>

          <a href="#Contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
