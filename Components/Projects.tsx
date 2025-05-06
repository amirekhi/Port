"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./Ui/Pin";

interface ProjectsProps {
  projects: any[];
  lang: "en" | "fa"; // English or Persian
}

const Projects = ({ projects, lang }: ProjectsProps) => {
  const isFarsi = lang === "fa"; // ✅

  return (
    <div className="py-20 w-[70vw] mx-auto max-md:py-6" dir={isFarsi ? "rtl" : "ltr"}>
      <h1
        className={`font-bold text-2xl md:text-5xl text-center light:text-[#3B3B3B] text-white `}
      >
        {isFarsi ? (
          <>
            پروژه‌های{" "}
            <span className="text-purple-300 light:text-purple-500">منتخب</span> ما را ببینید
          </>
        ) : (
          <>
            Explore the{" "}
            <span className="text-purple-300 light:text-purple-500">projects</span> you like
          </>
        )}
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item._id}
          >
            <PinContainer title={item.title[lang]} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[170px]  mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1
                className={`font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1 ${isFarsi ? "text-right" : "text-left"}`}
              >
                {item.title[lang]}
              </h1>

              <p
                className={`lg:text-xl lg:font-normal font-light text-sm line-clamp-2 ${isFarsi ? "text-right" : "text-left"}`}
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des[lang]}
              </p>

              <div
                className={`flex items-center justify-between mt-7 mb-3 ${isFarsi ? "flex-row-reverse" : ""}`}
              >
                <div className="flex items-center">
                  {item.iconLists.map((icon: string, index: number) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple text-transparent bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text">
                    {isFarsi ? "مشاهده پروژه" : "Check Live Site"}
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
