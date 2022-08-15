import React from "react";
import "./testimonials.css";
import { Testimonial_data } from "./testimonial_data";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
  return (
    <section id="Testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
    <Swiper className="container testimonial__container"
    modules={[Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>

      {
        Testimonial_data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} alt="abc" />
          </div>
          <h5 className="client__name">{name}</h5>
          <small className="client__review">
            {review}
          </small>
        </SwiperSlide>
          )
        }

        )
      }
        
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
