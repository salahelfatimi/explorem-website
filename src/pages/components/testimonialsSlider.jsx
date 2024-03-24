"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 2,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 3,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 4,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 5,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
    {
      id: 6,
      fullName: "salaheddine elfatimi",
      Comment:
        " Tabula language school is a MUST for anyone interested in bettering their testing skills.",
      date: "02/11/2021",
      job: "student",
    },
  ];
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSlider;
