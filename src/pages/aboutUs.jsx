"use client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
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
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-10">
        <div className=" relative z-10">
          <img
            src="/image/aboutUS/saction1.jpg"
            className="lg:h-[30rem] h-[14rem] w-full"
            alt="Explorem"
          />
          <div className=" absolute  items-center justify-center flex flex-col  inset-0 z-20">
            <div className="bg-[#0149A6]  absolute right-0 left-0 items-center flex flex-col  gap-2 capitalize lg:py-10 py-4 text-white  ">
              <h1 className="lg:text-5xl text-xl font-bold">{t("aboutUs")}</h1>
              <span className="lg:text-4xl ">{t("aboutUsSlogen")}</span>
            </div>
          </div>
        </div>
       
        <span className=" text-center  lg:text-2xl  p-4">
          
          <p>{t('aboutUsText.line1')}</p>
          <p>{t('aboutUsText.line2')}</p>
          <p>{t('aboutUsText.line3')}</p>
          
        </span>
        
      
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between w-full container gap-8 ">
        <img src="/image/aboutUS/slogen1.jpg" className="lg:w-1/2 rounded-xl" alt="Explorem" />
        <span className="bg-[#0149A6] text-white py-10 px-2 rounded-lg lg:w-1/2 font-mono lg:text-3xl md:text-2xl text-xl text-center">
          <p>{t('slogen1.line1')}</p>
          <p>{t('slogen1.line2')}</p>
        </span>
      </div>
      <div>
          <p></p>
          <img src="/image/aboutUS/logoHand.png" alt="Explorem" />
          <p></p>
      </div>
    </div>
  );
}
