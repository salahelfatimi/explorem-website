import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShow(true);
    }, 3000);

    // Clear the interval after 30 seconds
    setTimeout(() => {
      clearInterval(slideInterval);
      setShow(true);
    }, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <>
      <div
        className={`fixed  inset-0 flex items-center justify-center bg-[#f4f7fc]  duration-1000 transition z-50  ${
          show == false ? "translate-x-0" : "-translate-y-full"
        } `}
      >
        <span className={`font-extrabold md:text-3xl lg:text-4xl text-2xl  flex flex-col gap-4 items-center justify-center  `}>
        
        <img src="/image/logo/Explorem_logo.png" alt="explorem" className="w-1/3 md:w-1/2  " />
            {/* <span className=" flex flex-col gap-4 items-center z-10 ">
                <p>We make a <span className="text-[#0149a6]">difference .</span></p>
                <p>We make it <span className="text-[#0149a6]">happen .</span> </p>
            </span>
            <span className=" flex flex-col gap-4 items-center ">
                <p>Wij maken het <span className="text-[#0149a6]">verschil .</span></p>
                <p>We maken het <span className="text-[#0149a6]">waar .</span> </p>
                
    
            </span> */}
        </span>
      </div>
    </>
  );
}