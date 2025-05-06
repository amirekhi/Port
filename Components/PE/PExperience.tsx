import React from "react";

import { PWorkExperience} from "@/data";
import { Button } from "../Ui/MovingBorders";

const PExperience = () => {
  return (
    <div className="py-20 w-[75%] max-md:w-[80%] mx-auto">
      <h1 className="font-bold text-2xl md:text-5xl text-center light:text-[#3B3B3B] text-white">
        <span className="text-purple-300 light:text-purple-500">تجربه کاری</span> من 
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {PWorkExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1  text-white max-md:h-[280px] border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center  py-6 md:p-5 lg:p-10 gap-2 p-5 ">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16 mb-6"
              />
              <div className="lg:ms-5">
                <h1 className=" text-xl md:text-2xl font-bold text-right">
                  {card.title}
                </h1>
                <p className=" text-white-100 mt-3 font-semibold text-right">
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

export default PExperience;
