"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Menu, Moon, Phone, X } from "react-feather";
import { useTranslation } from "next-i18next";
import ChangeLungage from "./changeLungage/changeLungage";
import Image from "next/image";

export default function Navbar() {
  const { locale } = useRouter();
  const { t } = useTranslation("navbar");
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const Nav = [
    { id: 1, title: "home", href: "/" },
    { id: 2, title: "employers", href: "#" },
    { id: 3, title: "candidates", href: "#" },

    { id: 4, title: "contact", href: "/contact" },
    { id: 5, title: "about", href: "/aboutUs" },
  ];

  return (
    <>
      {/* nav pc */}
      <div className=" hidden fixed bg-white right-0 left-0 lg:block z-50 ">
        <div className="  container  px-8  py-4 flex  flex-row justify-between items-center ">
          <div>
            <Image
              width={1000}
              height={1000}
              src={`/image/logo/Explorem_logo.png`}
              className=" w-28 "
              alt="Explorem"
            />
          </div>
          <div className=" flex gap-6 items-center ">
            {Nav.map((ele, index) => (
              <div key={index}>
                <Link
                  href={ele.href}
                  locale={locale}
                  className={`${
                    router.pathname == ele.href
                      ? "border-b-2 border-[#0149A6]  text-[#0149A6]"
                      : ""
                  } capitalize text-lg font-semibold`}
                >
                  {t(ele.title)}
                </Link>
              </div>
            ))}
            <a
              className="flex items-center  gap-2 bg-[#0149A6] py-2 px-2 text-white rounded-full font-mediumt"
              href="tel:+212809-891297"
            >
              <Phone size={20} />
              (+212)8 09 89 12 97
            </a>
            <ChangeLungage open={true} setOpen={setOpen}/>
            <button className="bg-[#0149A6] rounded-full p-1">
              <Moon size={25} className="  stroke-white   " />
            </button>
          </div>
        </div>
      </div>

      {/* nav phone */}
      <div className=" block fixed bg-white right-0 left-0 lg:hidden z-50">
        <div className="  container  p-4 flex flex-col    ">
          <div className=" flex justify-between items-center">
            <Image
              width={1000}
              height={1000}
              src={`/image/logo/Explorem_logo.png`}
              className=" w-24 "
              alt="Explorem"
            />
            <Menu size={30} onClick={() => setOpen(!open)} />
          </div>
          <div
            className={`fixed   inset-0 flex items-center justify-center bg-white  duration-700 transition  ${
              open == false ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="absolute top-4 right-4 text-red-600 "
            >
              <X size={40} />
            </button>
            <div className=" flex gap-8  items-center flex-col">
              {Nav.map((ele, index) => (
                <button
                  onClick={() => {
                    setOpen(!open);
                  }}
                  key={index}
                >
                  <Link
                    href={ele.href}
                    locale={locale}
                    className={`${
                      router.pathname == ele.href
                        ? "border-b-2 border-[#0149A6]  text-[#0149A6]"
                        : ""
                    } capitalize text-lg font-semibold`}
                  >
                    {t(ele.title)}
                  </Link>
                </button>
              ))}
              <a
                className="flex items-center  gap-2 bg-[#0149A6] py-2 px-2 text-white rounded-full font-mediumt"
                href="tel:+212809-891297"
              >
                <Phone size={20} />
                (+212)8 09 89 12 97
              </a>
              <ChangeLungage setOpen={setOpen} open={open} />
              <button className="bg-[#0149A6] rounded-full p-1">
                <Moon size={25} className="  stroke-white   " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
