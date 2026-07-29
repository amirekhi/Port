import { gridItems } from "@/data";
import { BentoGridc, BentoGridItemc } from "./Ui/BentoGridcopy";

const Gridc = () => {
  return (
    <section id="about" className="w-[70%] mx-auto max-md:w-full ">
         <div className="w-[80%] mx-auto md:flex md:justify-center md:items-center md:flex-col md:mt-24 mt-16">
            <h2 className="text-white mt-8 z-50  text-xl font-bold mb-3 md:text-3xl light:text-[#3B3B3B]">an Overview of my work</h2>
            <p className="text-sm text-gray-200 max-md:max-w-[300px] md:text-lg  light:text-[#3B3B3B] md:text-center">here you can see an overview of my work , my leetcode profile which im really proud , of my latest project , my github account and all my projects plus my linkedin and other stuff that im into </p>
         </div>
      <BentoGridc className="w-full pb-30 pt-12 max-md:pb-12 max-md:pt-6">
        {gridItems.map((item) => (
          <BentoGridItemc
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            url={item.url}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGridc>
    </section>
  );
};

export default Gridc;
