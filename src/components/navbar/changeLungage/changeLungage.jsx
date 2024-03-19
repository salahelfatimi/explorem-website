'use client'
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import {  Triangle } from "react-feather";

export default function ChangeLungage({setOpen,open}){
    const [showLanguage, setShowLanguage] = useState(false);
    const pathname = usePathname()
    const { locale, locales, push } = useRouter();
    const handleClick=(lan)=>{
        push({pathname}, undefined ,{ locale:lan})
      }
    return(
        <>
          <div className="relative">
            <div
              className="flex  items-center gap-2 border-[#0149A6] border-4 py-1 px-2 rounded-full cursor-pointer"
              onClick={() => {
                setShowLanguage(!showLanguage)
              }}
            >
              <img
                src={`/image/flag/${locale}.png`}
                className="h-4 w-5"
                alt=""
              />
              <span className="font-semibold capitalize text-lg">{locale}</span>
              <Triangle
                size={13}
                className=" rotate-180 fill-[#0149A6] stroke-none "
              />
            </div>
            <div className={` absolute  bg-[#0149A6] p-3 rounded-md   right-0 left-0 ${ showLanguage===false?" hidden ":"block" }  `}>
              {locales.map((lan, index) => (
                <div onClick={() => { setShowLanguage(!showLanguage),handleClick(lan)}} key={index} className={`flex items-center hover:bg-white text-white hover:text-black rounded-md p-1 gap-2 `}>
                  <img
                    src={`/image/flag/${lan}.png`}
                    className="h-4 w-5"
                    alt=""
                  />
                  <span className=" capitalize font-semibold ">{lan}</span>
                </div>
              ))}
            </div>
          </div>
        </>
    )
}