import React from "react";
import { workExperience } from "@/data";
import { Button } from "./Ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 max-md:py-10 w-[75vw] max-md:w-[90%] mx-auto light:text-[#3B3B3B] text-white">
      <h1 className="font-bold text-2xl md:text-5xl text-center">
        My{" "}
        <span className="text-purple-300 light:text-purple-500">
          work experience
        </span>
      </h1>

      {/* Responsive grid */}
      <div className="w-full mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-white border-slate-800 w-full"
          >
            {/* Card content */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center p-4 md:p-5 lg:p-10 gap-3">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="w-12 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-sm md:text-lg lg:text-2xl font-bold leading-snug">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-2 text-xs md:text-sm lg:text-base font-semibold leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
