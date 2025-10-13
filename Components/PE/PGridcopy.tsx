import {  PEgridItems } from "@/data";
import { PBentoGridc, PBentoGridItemc } from "./PBentoGridcopy";

const PGridc = () => {
  return (
    <section id="about" className="w-[70%] mx-auto max-md:w-full">
      <PBentoGridc className="w-full py-30 max-md:py-12">
        {PEgridItems.map((item, i) => (
          <PBentoGridItemc
            id={item.id}
            key={i}
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
      </PBentoGridc>
    </section>
  );
};

export default PGridc;
