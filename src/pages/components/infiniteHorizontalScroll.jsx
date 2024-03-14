const InfiniteHorizontalScroll = ({ images }) => {
    return (
      <div className="flex overflow-hidden space-x-16 group ">
        <div className="flex space-x-16 animate-loop-scroll overflow-x-auto w-full md:w-auto">
          {images?.map((image, index) => (
            <div key={index}>
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
  