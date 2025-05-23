import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-[70vw] max-md:pt-10  mx-auto pt-20 pb-10 light:text-[#3B3B3B] text-white" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-2xl md:text-5xl text-center  lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className=" md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <Link href={"/ContactMe"}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </Link>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © CodeEKH
        </p>

        <div className="flex items-center md:gap-3 max-md:mt-6 gap-6">
          {socialMedia.map((info) => (
               <Link href={info.link} key={info.id}>
               <div
                
                 className="hover:text-white hover:scale-90 transition duration-200 ease-in w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
               >
                 <info.icon className="light:text-black text-white " size={24} />
               </div>
               </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
