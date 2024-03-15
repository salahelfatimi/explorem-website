"use client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import InfiniteHorizontalScroll from "./components/infiniteHorizontalScroll";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "navbar"])),
    },
  };
}
export default function Index() {
  const { t } = useTranslation("index");
  const images=[
    {src:"/image/aboutUS/slideLeft/image1.jpg"},
    {src:"/image/aboutUS/slideLeft/image2.jpg"},
    {src:"/image/aboutUS/slideLeft/image3.jpg"},
    {src:"/image/aboutUS/slideLeft/image4.jpg"},
    {src:"/image/aboutUS/slideLeft/image5.jpg"},
    {src:"/image/aboutUS/slideLeft/image6.jpg"},
    {src:"/image/aboutUS/slideLeft/image7.jpg"},
    {src:"/image/aboutUS/slideLeft/image8.jpg"},
    {src:"/image/aboutUS/slideLeft/image9.jpg"},

]
  return (
    <>
      <div className="bg-[#F5F5F5] space-y-8 pt-12">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h1 className="flex items-center gap-4 justify-center flex-col text-2xl lg:text-3xl font-extrabold capitalize">
            <span>{t("title.line1")} <span className="text-[#134BA1] px-2 py-1  bg-white ">{t("title.line2")}</span></span>
            <span>{t("title.line3")} <span className="bg-[#134BA1] px-2 py-1 text-white  ">{t("title.line4")}</span></span>
          </h1>
          <button className="bg-[#134BA1] py-3  px-6 text-white font-bold rounded-full uppercase">apply today</button>
        </div>
        <div className="bg-[#0149a6] py-6">
          <InfiniteHorizontalScroll images={images} />
        </div>
        <div>
            <div>
                
            </div>
        </div>
      </div>
    </>
  );
}
