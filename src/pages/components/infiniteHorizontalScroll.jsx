import React from 'react';

const InfiniteHorizontalScroll = ({ images }) => {
  return (
    <div className="flex overflow-hidden space-x-16 group ">
      <div className="flex space-x-16 loop-scroll lg:animate-loop-scroll">
        {images?.map((image, index) => (
          <div key={index}>
            <img src={image} className="max-w-none rounded-xl h-60 w-auto" alt="explorem" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;