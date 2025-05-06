import { gridItems } from "@/data";
import { BentoGridc, BentoGridItemc } from "./Ui/BentoGridcopy";

const Gridc = () => {
  return (
    <section id="about" className="w-[70%] mx-auto max-md:w-[80%]">
      <BentoGridc className="w-full py-30 max-md:py-16">
        {gridItems.map((item, i) => (
          <BentoGridItemc
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
      </BentoGridc>
    </section>
  );
};

export default Gridc;
