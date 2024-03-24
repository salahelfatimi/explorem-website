"use client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import InfiniteHorizontalScroll from "./components/infiniteHorizontalScroll";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, File, Folder, PenTool, Users } from "react-feather";
import TestimonialsSlider from "./components/testimonialsSlider";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "navbar"])),
    },
  };
}
export default function Index() {
  const { t } = useTranslation("index");
  const images = [
    { src: "/image/aboutUS/slideLeft/image1.jpg" },
    { src: "/image/aboutUS/slideLeft/image2.jpg" },
    { src: "/image/aboutUS/slideLeft/image3.jpg" },
    { src: "/image/aboutUS/slideLeft/image4.jpg" },
    { src: "/image/aboutUS/slideLeft/image5.jpg" },
    { src: "/image/aboutUS/slideLeft/image6.jpg" },
    { src: "/image/aboutUS/slideLeft/image7.jpg" },
    { src: "/image/aboutUS/slideLeft/image8.jpg" },
    { src: "/image/aboutUS/slideLeft/image9.jpg" },
  ];
  const grids = [
    {
      id: 1,
      title: t("grids.0.title"),
      description: t("grids.0.description"),
      svg: "training.svg",
    },
    {
      id: 2,
      title: t("grids.1.title"),
      description: t("grids.1.description"),
      svg: "search-job.svg",
    },
    {
      id: 3,
      title: t("grids.2.title"),
      description: t("grids.2.description"),
      svg: "social-management.svg",
    },
    {
      id: 4,
      title: t("grids.3.title"),
      description: t("grids.3.description"),
      svg: "diploma.svg",
    },
    {
      id: 5,
      title: t("grids.4.title"),
      description: t("grids.4.description"),
      svg: "academy-cap.svg",
    },
    {
      id: 6,
      title: t("grids.5.title"),
      description: t("grids.5.description"),
      svg: "passport.svg",
    },
  ];
 
  return (
    <>
      <div className="bg-[#F5F5F5]  space-y-8 py-12">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h1 className="flex items-center gap-4 justify-center flex-col text-2xl lg:text-3xl font-extrabold capitalize">
            <span>
              {t("title.line1")}{" "}
              <span className="text-[#134BA1] px-2 py-1  bg-white ">
                {t("title.line2")}
              </span>
            </span>
            <span>
              {t("title.line3")}{" "}
              <span className="bg-[#134BA1] px-2 py-1 text-white  ">
                {t("title.line4")}
              </span>
            </span>
          </h1>
          <div className=" flex lg:flex-row flex-col gap-4 items-center ">
            <Link
              href="/candidates"
              className="bg-[#134BA1] lg:py-3 py-2 transition duration-700 ease-in-out  border-4 border-[#134BA1]  px-6 text-white font-bold rounded-full  capitalize"
            >
              apply Candidates
            </Link>
            <Link
              href="/employers"
              className="bg-[#ffff] lg:py-3 py-2 transition duration-700 ease-in-out  border-4 border-[#134BA1]  px-6 text-[#134BA1] font-bold rounded-full  capitalize"
            >
              apply employers
            </Link>
          </div>
        </div>
        <div className="bg-[#0149a6] py-6">
          <InfiniteHorizontalScroll images={images} />
        </div>
        <div>
          <div className=" container grid items-center gap-4  grid-cols-1  lg:grid-cols-2">
            {grids.map((ele, index) => (
              <div
                key={index}
                className="flex   bg-white py-2 px-4  shadow rounded-md items-center gap-2"
              >
                <div className=" border-[#0149a6]  border-4 p-3 rounded-full">
                  <Image
                    width={500}
                    height={500}
                    src={`image/index/icon/${ele.svg}`}
                    className="w-11 min-w-11 fill-white"
                    alt="explorem"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className=" text-[#134BA1] font-bold lg:text-xl break-words">
                    {ele.title}
                  </span>
                  <span className=" text-md font-medium">
                    {ele.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className=" flex flex-col gap-4">
          <span className="flex  items-center gap-4 justify-center">
            <Image
              src="/image/aboutUS/logoHand.png"
              className="w-20 lg:w-24"
              width={195}
              height={159}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              alt="Explorem"
            />
            <p className=" capitalize font-bold text-xl lg:text-2xl text-[#0149a6]">
              {t("vedioTitle")}
            </p>
          </span>

          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            loop
            muted
            width="320"
            height="240"
            preload="none"
          >
            <source src="/video/Explorem.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className=" p-8 bg-[url('/image/aboutUS/saction2.jpg')] bg-cover ">
          <div className="  grid grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-4 justify-around  rounded   ">
            <div className=" flex flex-col gap-4 items-center justify-center bg-[#fff]  lg:p-16 p-6  rounded-md">
              <Users size={40} className=" stroke-[#0149a6]" />
              <p className=" text-2xl font-bold text-[#0149a6]">+ 2000</p>
              <p className=" text-xl font-bold text-[#0149a6]">STUDENTS</p>
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center bg-[#0149a6]  lg:py-16 p-6  rounded-md">
              <Folder size={40} className=" stroke-white" />
              <p className=" text-2xl font-bold text-white">125</p>
              <p className=" text-xl font-bold text-white">
                LEARNING PRORAMMES
              </p>
            </div>
            <div className=" flex flex-col gap-4 items-center justify-center bg-[#fff] lg:py-16 p-6  rounded-md">
              <PenTool size={40} className=" stroke-[#0149a6]" />
              <p className=" text-2xl font-bold text-[#0149a6]">10</p>
              <p className=" text-xl font-bold text-[#0149a6]">TEACHERS</p>
            </div>
            <div className="  flex flex-col gap-4 items-center justify-center bg-[#0149a6]  lg:py-16 p-6  rounded-md">
              <Briefcase size={40} className=" stroke-white" />
              <p className=" text-2xl font-bold text-white">100</p>
              <p className=" text-xl font-bold text-white">
                LANGUAGE TRAININGS
              </p>
            </div>
          </div>
        </div>
        <div>
            <TestimonialsSlider/>
        </div>
      </div>
    </>
  );
}
