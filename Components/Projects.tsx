"use client";

import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaLocationArrow } from "react-icons/fa6";

interface ProjectsProps {
  projects: any[];
  lang: "en" | "fa";
}

const Projects = ({ projects, lang }: ProjectsProps) => {
  const isFarsi = lang === "fa";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Detect scroll availability
  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth * 0.8;
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className=" relative py-20 w-full mx-auto max-md:w-[95vw] max-md:py-6" dir={isFarsi ? "rtl" : "ltr"}>
      <h1
        className={`font-bold text-2xl md:text-5xl text-center light:text-[#3B3B3B] text-white`}
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

      {/* Scroll container */}
      <div className="relative mt-10  ">
        <div
          ref={scrollRef}
          className="
            flex gap-10 p-20 md:overflow-x-hidden max-md:[&::-webkit-scrollbar]:hidden overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory 
          "
        >
          {projects.map((item) => (
            <div
              key={item._id}
              className="
                group relative snap-center shrink-0 sm:w-96 w-[80vw] flex flex-col justify-between rounded-3xl overflow-hidden
                transition-all duration-500
                bg-gradient-to-br from-[#331e83] to-[#030618]
                shadow-[0_0_40px_rgba(190,170,255,0.25)]
                hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(190,170,255,0.4)]
                dark:from-[#14101a] dark:to-[#0d0b12]
                dark:shadow-[0_0_50px_rgba(165,110,255,0.4)]
                dark:hover:shadow-[0_0_80px_rgba(190,120,255,0.65)]
                border border-white/[0.1]
              "
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.img}
                  alt="cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent dark:from-black/30 dark:to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h1
                    className={`font-semibold tracking-tight lg:text-2xl md:text-xl text-lg mb-2 ${
                      isFarsi ? "text-right" : "text-left"
                    } text-white`}
                  >
                    {item.title[lang]}
                  </h1>
                  <p
                    className={`text-sm leading-relaxed ${
                      isFarsi ? "text-right" : "text-left"
                    } text-gray-300`}
                  >
                    {item.des[lang]}
                  </p>
                </div>

                {/* Footer */}
                <div
                  className={`flex items-center justify-between mt-6 ${
                    isFarsi ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex items-center">
                    {item.iconLists.map((icon: string, index: number) => (
                      <div
                        key={index}
                        className="
                          border border-black/10 dark:border-purple-500/20
                          rounded-full bg-white/60 dark:bg-purple-950/20
                          backdrop-blur-md w-9 h-9 flex justify-center items-center
                          transition-all duration-300 group-hover:dark:bg-purple-900/30
                        "
                        style={{
                          transform: `translateX(-${5 * index}px)`,
                        }}
                      >
                        <img src={icon} alt="icon" className="w-4 h-4" />
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.link}
                    className="
                      flex items-center gap-2 text-sm font-medium
                      text-purple-700 hover:text-purple-500
                      dark:text-purple-300 dark:hover:text-purple-200
                      transition-colors
                    "
                  >
                    {isFarsi ? "مشاهده پروژه" : "Check Live Site"}
                    <FaLocationArrow className="text-purple-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 -translate-y-1/2 left-0 p-3 rounded-full bg-gradient-to-r from-black/40 to-transparent text-white hover:from-black/60 transition"
          >
            <FaChevronLeft size={20} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 -translate-y-1/2 right-0 p-3 rounded-full bg-gradient-to-l from-black/40 to-transparent text-white hover:from-black/60 transition"
          >
            <FaChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Projects;
