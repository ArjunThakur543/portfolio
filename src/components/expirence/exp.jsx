import React from 'react'
import './exp.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Exp = () => {
  return (
    <section id="Exp">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

{/* backend  */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Ajax</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp