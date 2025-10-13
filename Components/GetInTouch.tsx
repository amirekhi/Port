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
}

const gradientBorder =
  "bg-gradient-to-tr from-purple-500 via-pink-500 to-pink-400";

export const GetInTouch = ({ contacts, className }: GetInTouchProps) => {
  return (
    // Wrapper to isolate scroll from layout parent's overflow-hidden
    <div className={cn("w-full overflow-visible my-12 flex justify-center items-center ",  className)}>
      <div className="flex pl-4 gap-4 overflow-x-auto scroll-smooth px-2 py-4 max-md:scroll-pl-4 max-md:scroll-pr-4 [&::-webkit-scrollbar]:hidden">
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
  );
};
