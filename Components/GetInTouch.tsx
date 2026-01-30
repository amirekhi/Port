"use client";

import { cn } from "@/lib/Utils";
import Link from "next/link";

type ContactItem = {
  name: string;
  url: string;
  img: string; // avatar or icon
};

interface GetInTouchProps {
  contacts: ContactItem[];
  className?: string;
  lang ?: "en" | "fa";
}

const gradientBorder =
  "bg-gradient-to-tr from-purple-500 via-pink-500 to-pink-400";

export const GetInTouch = ({ contacts, className , lang}: GetInTouchProps) => {
  return (
    <>
    <div className={`w-[80%] mx-auto md:flex md:justify-center md:items-center md:flex-col md:my-6 ${lang == "fa" ? "mt-12" : ""}`}>
      <h2 className={`dark:text-white mt-8 z-50  text-xl font-bold mb-3 md:text-3xl light:text-[#3B3B3B] ${lang === "fa" ? "text-right" : "text-left"}`}>{lang === "fa" ? "در تماس باشید" : "Get in touch"}</h2>
      <p className="text-sm dark:text-gray-200 max-md:max-w-[300px] md:text-lg  light:text-[#3B3B3B]">{lang === "fa" ? "من همیشه در دسترس هستم. می‌توانید با من از طریق روش‌های زیر در تماس باشید. همیشه از ارتباط با شما عزیزان خوشحال میشوم." : "im always available you can contact me 24/7 via the means below im always up for a challeng"}</p>
    </div>


    <div className={cn("w-full overflow-visible  flex justify-center items-center ",  className)}>
      <div className="flex max-md:px-8 gap-4 overflow-x-auto scroll-smooth px-2 py-4 max-md:scroll-pl-4 max-md:scroll-pr-4 [&::-webkit-scrollbar]:hidden">
        {contacts.map((contact, i) => (
          <Link key={i} href={contact.url} target="_blank" className="flex-shrink-0 snap-center">
            <div
              className={cn(
                "w-16 h-16 md:w-20 md:h-20 rounded-full p-1",
                gradientBorder,
                "hover:scale-110 transition-transform duration-200"
              )}
            >
              <div className="bg-black dark:bg-gray-900 w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={contact.img}
                  alt={contact.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};
