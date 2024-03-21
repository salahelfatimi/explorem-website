import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
    },
  };
}
export default function Employers() {
  return (
    <>
      <div className="flex flex-col gap-8 pb-16 bg-[#F5F5F5] ">
        <div className="flex flex-col gap-10">
          <div className="relative">
            <Image
              src="/image/employers/saction1.jpg"
              className="h-auto max-w-full w-full  "
              width={1200}
              height={550}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              alt="Explorem"
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#0149A6]  w-full items-center flex flex-col gap-2 capitalize p-1 lg:p-4 text-white">
                <h1 className="lg:text-4xl text-md font-bold">
                  Our Best Services for You
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
