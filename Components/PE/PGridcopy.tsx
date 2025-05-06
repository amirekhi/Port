import {  PEgridItems } from "@/data";
import { PBentoGridc, PBentoGridItemc } from "./PBentoGridcopy";

const PGridc = () => {
  return (
    <section id="about" className="w-[70%] mx-auto max-md:w-[80%]">
      <PBentoGridc className="w-full py-30 max-md:py-16">
        {PEgridItems.map((item, i) => (
          <PBentoGridItemc
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </PBentoGridc>
    </section>
  );
};

export default PGridc;
