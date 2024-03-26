"use client";

import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";

const slides = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
];

const InfiniteHorizontalScroll = ({ images }) => {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Wrapping div for seamless looping */}
      <motion.div
        className="flex"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          },
        }}
      >
        {/* Render duplicated slides */}
        {duplicatedImages.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 "
            style={{ width: `${100 / slides.length}%` }}
          >
            <div className="flex flex-col gap-4 items-center justify-center h-full text-6xl">
              <Image
                width={1200}
                priority={false}
                height={550}
                src={slide.src}
                className=" rounded-sm h-64 object-cover "
                alt="explorem"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
