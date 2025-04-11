import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "../MagicButton";
import Link from "next/link";

const PFooter = () => {
  return (
    <footer className="w-[70vw]  mx-auto pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-white lg:max-w-[45vw]">
        اماده ای تا بیزینست رو با دنیای دیجیتال  به یه لول دیگه ارتقا بدی ؟
        </h1>
        <p className="text-white md:mt-10 my-5 text-center">
         همین امروز با من تماس بگیر ,  در مورد رویا و کارت صحبت کنیم
        </p>
        <a href="mailto:ekhiamir@gmail.com">
          <MagicButton
            title="با من در تماس باش "
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link href={info.link} key={info.id}>
            <div
             
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default PFooter;
