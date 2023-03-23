import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import gym1 from './images/gym1.png'
import gym2 from './images/gym2.png'
import gym3 from './images/gym3.png'
import gym4 from './images/gym4.png'
import gym5 from './images/gym5.png'

// import required modules
import { Autoplay, Navigation } from "swiper";
import './BannerScroll.css'
export default function BannerScroll() {
  return (
    <>
    <div className="banner-scroll-container">

        <Swiper

            autoplay={{
            delay: 2500,
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide><img src={gym1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={gym2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={gym3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={gym4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={gym5} alt="" /></SwiperSlide>
        </Swiper>
    </div>
      
    </>
  );
}