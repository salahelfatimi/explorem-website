"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Controller, FreeMode, Grid, Mousewheel } from "swiper/modules";

import "swiper/css";
const InfiniteHorizontalScroll = ({ images }) => {
  return (
    <Swiper
   
      modules={[Autoplay, Grid, FreeMode,Mousewheel, Controller]}
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }}
    
      mousewheel={false}
      slidesPerView={1}
      spaceBetween={10}
      freeMode={true}
      loop={true}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        "@1.75": {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      }}
    >
      {images?.map((ele, index) => (
        <SwiperSlide key={index} className=" ">
          <Image
            width={1200}
            priority={false}
            height={550}
            src={ele.src}
            className=" rounded-md h-64 object-cover "
            alt="explorem"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InfiniteHorizontalScroll;
