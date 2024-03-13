import React, { useRef, useEffect } from "react";

const InfiniteHorizontalScroll = ({image}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let interval;

    const startScrolling = () => {
      interval = setInterval(() => {
        container.scrollLeft += 2; // Scroll to the right by 2 pixels
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0; // Reset to the beginning when reaching the end
        }
      }, 30);
    };

    startScrolling();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-[#0149a6] overflow-hidden">
      <div
        ref={containerRef}
        className="grid grid-cols-6 gap-4 p-8 items-center overflow-hidden"
        style={{
          scrollSnapType: "x mandatory",
          whiteSpace: "nowrap",
          display: "flex",
        }}
      >
        {image?.map((index) => (
          <img
            key={index}
            src={`/image/aboutUS/image${index}.png`}
            className="rounded-xl h-60 w-auto"
            alt={`image${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
