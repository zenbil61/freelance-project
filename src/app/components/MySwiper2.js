"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./MySwiper2.css";

// import required modules


export default function App() {
  return (
    <div className="">
      <Swiper
        effect={"creative"}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -400],
            scale: 0.85,
            opacity: 0.7,
          },
          next: {
            translate: ["120%", 0, -400],
            scale: 0.85,
            opacity: 0.7,
          },
          active: {
            translate: [0, 0, 0],
            scale: 1,
            opacity: 1,
          },
        }}
        modules={[EffectCreative, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
