import { useEffect, useRef } from 'react';

const InfiniteHorizontalScroll = ({ images }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const animationDuration = scrollWidth / 50; // Adjust scroll speed here

    const keyframes = `@keyframes loop-scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-${scrollWidth}px); }
    }`;

    const style = document.createElement('style');
    style.innerHTML = keyframes;
    document.head.appendChild(style);

    container.style.animation = `loop-scroll ${animationDuration}s linear infinite`;

    return () => {
      document.head.removeChild(style);
      container.style.animation = '';
    };
  }, []);

  return (
    <div className="flex overflow-hidden group">
      <div className="flex space-x-16" ref={containerRef}>
        {images?.map((image, index) => (
          <div key={index}>
            <img
              src={`/image/aboutUS/slideLeft/image${image}.jpg`}
              className="max-w-none rounded-xl h-60 w-auto"
              alt="explorem"
            />
          </div>
        ))}
        {/* Duplicate the images to create a loop */}
        {images?.map((image, index) => (
          <div key={`duplicate-${index}`}>
            <img
              src={`/image/aboutUS/slideLeft/image${image}.jpg`}
              className="max-w-none rounded-xl h-60 w-auto"
              alt="explorem"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
