import {React, useEffect} from 'react'
import './exp.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';

function Exp () {
  useEffect(() => {
    AOS.init(
      {duration : 4000}
    );
    AOS.refresh();
  }, []);

  return (
    <section id="Exp">
      <h5>Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="fade-down-right">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>React</h4>
                <small className='text-light'>Rookie</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>Angular</h4>
                <small className='text-light'>Rookie</small>
              </div>
            </article>
          </div>
        </div>

{/* backend  */}

        <div className="experience__backend" data-aos="fade-down-left">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Python 3</h4>
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
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon"  />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Rookie</small>
              </div>
            </article>
            <article className="experience__detail">
              <BsPatchCheckFill className="experience__detail-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Rookie</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Exp