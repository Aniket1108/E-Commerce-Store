
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./home.scss";
import SwiperCore, { Navigation } from 'swiper/core';

import home2 from "../../img/home2.jpg"
import home3 from "../../img/home3.jpg" 
// import home4 from "../../img/home4.jpg"


SwiperCore.use([Navigation]);



const Slider = () => {



  return (
    <div className="slider">
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide><img src={home2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={home3} alt="" /></SwiperSlide>
        {/* <SwiperSlide><img src={home4} alt="" /></SwiperSlide> */}
      </Swiper>
    </div>
  )
}
export default Slider