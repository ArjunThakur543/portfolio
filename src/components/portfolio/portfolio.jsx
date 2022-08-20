import React from "react";
import { useEffect } from "react";
import "./portfolio.css";
import { Portfolio_data } from "./portfolio_data";
import AOS from "aos";
import "aos/dist/aos.css";



function Portfolio ()  {
  useEffect(() => {
    AOS.init(
      {duration : 4000}
    );
    AOS.refresh();
  }, []);
  return (
    <section id="Portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          Portfolio_data.map(({id, image, title, github, live}) => {
            return(
              <article data-aos="fade-up" className="portfolio__item"  >
                <div key={id} className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-disable" target={"_blank"} rel={"noreferrer"} disabled>
                    Github
                  </a>
                  <a href={live} className="btn btn-primary btn__disable" target={"_blank"} rel={"noreferrer"}>
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;
