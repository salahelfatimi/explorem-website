"use client";

import Image from "next/image";

const InfiniteHorizontalScroll = ({ images }) => {
  return (
    <div className="flex overflow-hidden space-x-4   ">
      <div className="flex space-x-4 lg:animate-loop-scroll">
        {images?.map((ele, index) => (
          <div key={index}>
            <Image
              width={1200}
              priority={false}
              height={550}
              src={ele.src}
              className="max-w-none rounded-sm h-64 w-auto"
              alt="explorem"
            />
          </div>
        ))}
      </div>
      <div className="flex space-x-4 lg:animate-loop-scroll" aria-hidden="true">
        {images?.map((ele, index) => (
          <div key={index}>
            <Image
              width={1200}
              priority={false}
              height={550}
              src={ele.src}
              className="max-w-none rounded-sm h-64 w-auto"
              alt="explorem"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
