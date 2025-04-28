import Link from "next/link";
import React from "react";

export const Plan = () => {
  return (
    <div className="flex sticky top-[calc(100vh_-_48px_-_16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-xs pb-[100px]">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold">More Info</p>
          <p className="text-stone-500">Contact Me </p>
        </div>

        <Link href={'/Pe/ContactMe'} className="px-2 text-black py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded mb-2">
          Support
        </Link>
      </div>
    </div>
  );
};
