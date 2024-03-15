"use client"
const InfiniteHorizontalScroll = ({images}) => {
  return (
    <div className="flex overflow-hidden space-x-4 group ">
        <div className="flex space-x-4 lg:animate-loop-scroll ">
            {
                images?.map((ele,index)=>(
                    <div key={index}>
                        <img  src={ele.src} className="max-w-none rounded-sm h-52 w-auto" alt="explorem" />
                    </div>
                ))
            }
        </div>
        <div className="flex space-x-4 lg:animate-loop-scroll " aria-hidden="true">
            {
                images?.map((ele,index)=>(
                    <div key={index}>
                        <img  src={ele.src} className="max-w-none rounded-sm h-52 w-auto" alt="explorem" />
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default InfiniteHorizontalScroll;