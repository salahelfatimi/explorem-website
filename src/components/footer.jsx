import { Clock, Facebook, Instagram, Linkedin, MapPin, Phone, Youtube } from "react-feather";

export default function Footer() {
  return (
    <>
      <div className="bg-[#22242B] py-20 container gap-8 flex flex-col lg:flex-row items-center justify-between">
        <div className=" flex flex-col   gap-8">
          <span className="flex flex-col lg:flex-row text-center items-center gap-2">
            <MapPin size={25} className=" stroke-[#0149A6]"/>
            <p className=" font-medium text-white">
              6 Rue des Vieux Marrakchis, Bureau Nr 7 Gueliz, Marrakech, Morocco
            </p>
          </span>
          <span className="flex flex-col lg:flex-row text-center items-center gap-2">
            <Phone size={25} className=" stroke-[#0149A6]"/>
            <p className=" font-medium text-white">(+212) 6 02 31 48 04</p>
          </span>
          <span className="flex flex-col lg:flex-row text-center items-center gap-2">
            <Clock size={25} className=" stroke-[#0149A6]"/>
            <p className=" font-medium text-white">Monday - Friday: 8 AM - 5 PM </p>
          </span>
          <span className="flex gap-6 justify-between lg:justify-normal">
            <Facebook size={25} className=" stroke-white"/>
            <Instagram size={25} className=" stroke-white"/>
            <Linkedin size={25} className=" stroke-white"/>
            <Youtube size={25} className=" stroke-white  "/>
          </span>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-auto">
            <span className=" font-bold text-xl text-center lg:text-left text-white">Newsletter</span>
            <input type="text" name="Newsletter"  placeholder="Your Email" className=" placeholder-white bg-[#22242B] border-[#0149A6] border-2 py-2 px-4 rounded-full " id="Newsletter" />
            <button className="bg-[#0149A6] rounded-full py-2 px-4 text-white font-semibold uppercase">subscribe</button>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-[#0149A6] py-4">
        <span className=" flex gap-4 flex-col lg:flex-row items-center font-bold capitalize text-center md:text-start text-white ">
            Copyright &copy;  {new Date().getFullYear()} . All rights are reserved by <span className="bg-white text-[#0149A6] w-fit p-2 uppercase font-bold">explorem</span>
        </span>
      </div>
    </>
  );
}
