"use client";

import React from "react";

import { companies, Ptestimonials } from "@/data";
import { InfiniteMovingCards } from "../Ui/InfiniteCards";

const PClients = () => {
  return (
    <section id="testimonials" className="py-20 max-md:py-6 max-md:mt-12">
      <h1 className="font-bold text-2xl md:text-5xl text-center light:text-[#3B3B3B] text-white mx-auto w-[80%]">
        کلماتی زیبا از 
        <span className="text-purple-300 light:text-purple-500"> رضایت مشتری</span>
      </h1>

      <div className="flex flex-col items-center ">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[350px] md:h-[500px] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={Ptestimonials}
            direction="right"
            speed="normal"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 text-black">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PClients;
