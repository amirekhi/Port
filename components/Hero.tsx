
import { FaLocationArrow } from "react-icons/fa6";
import { FaLanguage } from "react-icons/fa";
import Link from "next/link";

import MagicButton from "./MagicButton";
import { Spotlight } from "./Ui/Spotlight";
import { TextGenerateEffect } from "./Ui/TextGenerateEffect";
import { GridBackgroundDemo } from "./Ui/GridBackgroundDemo";

const Hero = () => {
  return (
    <div className="pb-8 pt-28 md:pt-36 w-full md:w-[80vw] mx-auto relative light:text-[#3B3B3B] px-4 md:px-0">

      {/* Language switch */}
      <div className="absolute z-50 top-4 md:top-0 right-4 md:right-0 max-md:hidden">
        <Link href="/Pe">
          <MagicButton
            title="فارسی"
            icon={<FaLanguage size={35} />}
            position="right"
            buttonClasses="md:w-32"
          />
        </Link>
      </div>

      {/* Spotlights (unchanged for desktop) */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>

      <GridBackgroundDemo />

      <div className="flex justify-center relative my-20 md:my-20 z-10">
        <div className="max-w-full md:max-w-[60vw] flex flex-col items-center text-center">

          <p className="uppercase tracking-widest text-xs text-blue-100 light:text-[#3B3B3B]">
            Dynamic Web Magic with Next.js
          </p>

          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            duration={2}
            filter={false}
            className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-6xl"
          />

          <p className="mt-2 mb-6 text-base sm:text-lg lg:text-2xl text-white light:text-[#3B3B3B]">
            Hi! I&apos;m Amir, a Software engineer based in Tehran.
          </p>

          <Link href="/Projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Hero;
