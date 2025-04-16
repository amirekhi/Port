

import MagicButton from "./MagicButton";
import { Spotlight } from "./Ui/Spotlight";
import { TextGenerateEffect } from "./Ui/TextGenerateEffect";
import { GridBackgroundDemo } from "./Ui/GridBackgroundDemo";
import { FaLanguage } from 'react-icons/fa'
import Link from "next/link";

const PTechHero = () => {
  return (
    <div className="pb-20 pt-36 w-[80vw] mx-auto relative ">
      
      <div className="absolute max-md:hidden z-50 top-0 right-0" >
       < Link href={'/Tech'} >
            <MagicButton
              title="English"
              icon={<FaLanguage size={35} />}
              position="right"
              buttonClasses="md:w-32"
            />
          </Link>
      </div>
      
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
     <GridBackgroundDemo/>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
          تکنولوژی‌ ها و استک‌ هایی که از آنها استفاده می‌ کنم و با آنها آشنایی دارم
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="دسته بندی تمامی تکنولوژی ها با لوگوی انها"
            duration={2}
             filter={false}
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white ">
           در این صفحه من تمام تکنولوژیها و استک‌ هایی که با آنها آشنایی دارم را بر اساس زبان‌های برنامه‌ نویسی، فریم‌ ورکها و سایر دسته‌ بندیها مرتب کرده‌ ام
          </p>

    
          <div className="mt-4 md:hidden" >
          <Link href="/Tech">
              <MagicButton
                  title="English"
                  icon={<FaLanguage size={35} />}
                  position="right"
                  buttonClasses="md:w-32"
                />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PTechHero;
