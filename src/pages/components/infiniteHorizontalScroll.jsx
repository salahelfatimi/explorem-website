"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Controller,
  FreeMode,
  Grid,
  Mousewheel,
} from "swiper/modules";

import "swiper/css";
const InfiniteHorizontalScroll = ({ images }) => {
  return (
    <div class="relative space-x-4 flex overflow-x-hidden">
      <div class="py-12 gap-4 flex animate-marquee whitespace-nowrap">
        {images?.map((ele, index) => (
         
            <Image
            key={index}
              width={1920}
              
              height={1080}
              src={ele.src}
              className="max-w-none rounded-sm h-64 w-auto"
              alt="explorem"
            />
          
        ))}
      </div>

      <div class="absolute gap-4 flex top-0 py-12 animate-marquee2 whitespace-nowrap">
        {images?.map((ele, index) => (
         
            <Image
            key={index}
              width={550}
              
              height={550}
              src={ele.src}
              className="max-w-none rounded-sm h-64 w-auto"
              alt="explorem"
            />
         
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
