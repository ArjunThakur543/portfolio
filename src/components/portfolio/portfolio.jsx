import React from "react";
import "./portfolio.css";
import { Portfolio_data } from "./portfolio_data";


const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          Portfolio_data.map(({id, image, title, github, live}) => {
            return(
              <article className="portfolio__item">
                <div key={id} className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-disable" target={"_blank"} disabled>
                    Github
                  </a>
                  <a href={live} className="btn btn-primary btn__disable" target={"_blank"}>
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
