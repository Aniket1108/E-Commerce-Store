
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "./home.scss";
import SwiperCore, { Navigation } from 'swiper/core';

import home from "../../img/home.png"
import kawasaki from "../../img/kawasaki.jpg"
import gear from "../../img/gear.png"


SwiperCore.use([Navigation]);



const Slider = () => {



  return (
    <>
      <Swiper navigation={true} className="mySwiper">
        <SwiperSlide><img src={home} alt="" /></SwiperSlide>
        <SwiperSlide><img src={kawasaki} alt="" /></SwiperSlide>
        <SwiperSlide><img src={gear} alt="" /></SwiperSlide>
      </Swiper>
    </>
  )
}
export default Slider