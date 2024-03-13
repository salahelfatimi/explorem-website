import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setShow(true);
    }, 2000);

    // Clear the interval after 30 seconds
    setTimeout(() => {
      clearInterval(slideInterval);
      setShow(true);
    }, 2000);

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
        <span className={`font-extrabold md:text-5xl text-4xl animate-bounce flex justify-center  `}>
        
        <img src="/image/logo/Explorem_logo.png" alt="explorem" className="w-1/2  " />
        </span>
      </div>
    </>
  );
}