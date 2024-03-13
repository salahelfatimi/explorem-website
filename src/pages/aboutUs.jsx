"use client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { Check } from "react-feather";
import InfiniteHorizontalScroll from "./components/infiniteHorizontalScroll";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["aboutUs", "navbar"])),
    },
  };
}

export default function AboutUs() {
  const { t } = useTranslation("aboutUs");

  return (
    <div className="flex flex-col gap-8 bg-[#F5F5F5]">
      <div className="flex flex-col gap-10">
        <div className=" bg-[url('/image/aboutUS/saction1.jpg')] bg-cover  ">
          <div className=" py-28 ">
            <div className="bg-[#0149A6] w-full items-center flex flex-col  gap-2 capitalize  p-4 text-white  ">
              <h1 className="lg:text-4xl text-xl font-bold">{t("aboutUs")}</h1>
              <span className="lg:text-2xl ">{t("aboutUsSlogen")}</span>
            </div>
          </div>
        </div>

        <span className=" text-center  lg:text-2xl    container">
          <p>{t("aboutUsText.line1")} <span className=" font-bold text-[#0149A6]">{t("aboutUsText.line2")}</span>{t("aboutUsText.line3")}</p>
          <p >{t("aboutUsText.line4")}</p>
          <p>{t("aboutUsText.line5")}</p>
        </span>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full container gap-4 ">
        <span className="bg-[#0149A6] text-white py-10 px-2 rounded-lg lg:w-1/2 font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
          <p>{t("slogen1.line1")}</p>
          <p>{t("slogen1.line2")}</p>
        </span>
        <img
          src="/image/aboutUS/slogen1.jpg"
          className="lg:w-1/3 rounded-xl"
          alt="Explorem"
        />
      </div>
      <div className="container flex flex-col gap-4 lg:flex-row w-full items-center justify-between text-center">
        <span className=" bg-white lg:w-1/3 flex flex-col gap-3 p-4 rounded-xl">
          <p className=" font-bold text-xl uppercase lg:text-2xl text-[#0149a6]">
            {t("grid.grid1.title")}
          </p>
          <p className=" lg:text-lg font-medium">{t("grid.grid1.text")}</p>
        </span>
        <img
          src="/image/aboutUS/logoHand.png"
          className="w-36"
          alt="Explorem"
        />
        <span className=" bg-white lg:w-1/3 flex flex-col gap-3 p-4 rounded-xl">
          <p className=" font-bold text-xl uppercase lg:text-2xl text-[#0149a6]">
            {t("grid.grid2.title")}
          </p>
          <p className=" lg:text-lg font-medium">{t("grid.grid2.text")}</p>
        </span>
      </div>
      <div className="bg-[url('/image/aboutUS/saction2.jpg')] bg-cover ">
        <div className="bg-[#0149a6]/70  py-16">
          <div className="right-0 left-0 items-center flex flex-col  container gap-12  lg:py-10 py-4 text-white">
            <h2 className="lg:text-4xl text-xl font-bold">
              {t("WhyChooseUs.title")}
            </h2>
            <span className="text-lg lg:text-2xl flex flex-col gap-2 text-center">
              <p className=" font-bold text-[#0149a6] bg-white">{t("WhyChooseUs.line1")}</p>
              <p className=" font-bold text-[#0149a6] bg-white">{t("WhyChooseUs.line2")}</p>
              <p>{t("WhyChooseUs.line3")}</p>
              <p>{t("WhyChooseUs.line4")}</p>
            </span>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        <span className="flex  items-center justify-center">
          <img
            src="/image/aboutUS/logoHand.png"
            className="w-24 lg:w-32"
            alt="Explorem"
          />
          <p className=" capitalize font-bold text-xl lg:text-3xl text-[#0149a6]">
            {t("vedioTitle")}
          </p>
        </span>

        <video
          className="w-full h-full object-cover"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/video/Explorem.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
      <div className=" container flex flex-col  gap-4">
        <p className=" capitalize font-bold text-center text-xl lg:text-3xl text-[#0149a6]">
            {t("whatWeHaveAchieved.title")}
        </p>
      
        <ul className="  px-2 lg:text-xl flex flex-col gap-4 font-semibold list-outside leading-loose ">
          <li className=" border-l-4 border-[#0149a6] pl-4" >{t("whatWeHaveAchieved.line1")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line2")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line3")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line4")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line5")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line6")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line7")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line8")}</li>
          <li className=" border-l-4 border-[#0149a6] pl-4">{t("whatWeHaveAchieved.line9")}</li>
        </ul>
      </div>
    
        <div  >
            <InfiniteHorizontalScroll image={[1,2,3,4,5,6,7,8,9,10,11,12]}/>
            
        </div>
        <div className=" container">
        <div className="bg-[#0149A6] rounded-md px-4 py-10  ">
          <span className="text-white   rounded-lg  font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
              <p>{t("slogen2.line1")}</p>
              <p>{t("slogen2.line2")}</p>
          </span>
        </div>
        </div>
        
     
     
    </div>
  );
}