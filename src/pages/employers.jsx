"use client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import InfiniteHorizontalScroll from "./components/infiniteHorizontalScroll";
import Contact from "./contact";
import { useTranslation } from "next-i18next";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "contact",
        "navbar",
        "employers",
      ])),
    },
  };
}
export default function Employers() {
  const { t } = useTranslation("employers");

  const services = [
    {
      title: t("Services.line1.title"),
      description: t("Services.line1.description"),
    },
    {
      title: t("Services.line2.title"),
      description: t("Services.line2.description"),
    },
    {
      title: t("Services.line3.title"),
      description: t("Services.line3.description"),
    },
    {
      title: t("Services.line4.title"),
      description: t("Services.line4.description"),
    },
    {
      title: t("Services.line5.title"),
      description: t("Services.line5.description"),
    },
    {
      title: t("Services.line6.title"),
      description: t("Services.line6.description"),
    },
    {
      title: t("Services.line7.title"),
      description: t("Services.line7.description"),
    },
    {
      title: t("Services.line8.title"),
      description: t("Services.line8.description"),
    },
    {
      title: t("Services.line9.title"),
      description: t("Services.line9.description"),
    },
    {
      title: t("Services.line10.title"),
      description: t("Services.line10.description"),
    },
    {
      title: t("Services.line11.title"),
      description: t("Services.line11.description"),
    },
    {
      title: t("Services.line12.title"),
      description: t("Services.line12.description"),
    },
  ];
  const Partners = [
    { src: "/image/employers/partnersGrid/imagePartners3.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners4.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners5.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners1.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners6.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners7.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners2.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners8.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners9.jpg" },
    { src: "/image/employers/partnersGrid/imagePartners10.jpg" },
  ];
  return (
    <>
      <div className="flex flex-col gap-8 pb-16   bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div>
            <div className="relative">
              <Image
                src="/image/employers/saction1.jpg"
                className="h-auto max-w-full w-full  "
                width={1200}
                height={1200}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
                alt="Explorem"
              />

              <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#ffff]  w-full items-center flex flex-col gap-2 capitalize p-2 lg:p-9 text-[#0149A6]">
                  <h1 className="lg:text-4xl text-md font-bold">
                    <span>{t("titleEmployers")}</span>
                  </h1>
                </div>
              </div>
            </div>
            <h2 className=" bg-[#0149A6]   font-bold lg:text-3xl text-md text-[#ffff] text-center p-4  ">
              <span>{t("descriptionEmployers")}</span>
            </h2>
          </div>

          <div className="px-2 flex flex-col gap-4  list-outside ">
            {services.map((ele, index) => (
              <div
                key={index}
                className="border-l-4 flex flex-col border-[#0149a6] bg-white p-2 pl-4  rounded-r-sm container"
              >
                <span className="text-md lg:text-lg  font-semibold mb-4 text-[#0149a6]">
                  {ele.title}
                </span>
                <span className="text-gray-700 text-sm md:text-base">
                  {ele.description}
                </span>
              </div>
            ))}
          </div>
          <div>
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-4">
                <span className="flex  items-center gap-4 justify-center">
                  <Image
                    src="/image/aboutUS/logoHand.png"
                    className="w-20 lg:w-24"
                    width={1200}
                    height={550}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                    alt="Explorem"
                  />
                  <span className=" capitalize font-bold text-xl lg:text-2xl text-[#0149a6]">
                    {t("ourJourneyWithPartners")}
                  </span>
                </span>
              </div>
              <div className="bg-[#0149a6] py-6">
                <InfiniteHorizontalScroll images={Partners} />
              </div>
              <div className=" container">
                <div className="bg-[#0149A6] rounded-md px-4 py-10  ">
                  <span className="text-white   rounded-lg  font-mono font-bold lg:text-2xl md:text-xl text-lg text-center">
                    <p>{t("slogen.line1")}</p>
                    <p>{t("slogen.line2")}</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-8">
            <div className="flex flex-col items-center gap-4">
              <span className="flex  items-center gap-4 justify-center">
                <Image
                  src="/image/aboutUS/logoHand.png"
                  className="w-20 lg:w-24"
                  width={1200}
                  height={550}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }}
                  alt="Explorem"
                />
                <span className=" capitalize text-center font-bold text-md lg:text-2xl text-[#0149a6]">
                  {t("getInTouch")}
                </span>
              </span>
            </div>

            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
