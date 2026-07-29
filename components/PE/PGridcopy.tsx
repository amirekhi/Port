import { PEgridItems } from "@/data";
import { PBentoGridc, PBentoGridItemc } from "./PBentoGridcopy";

const PGridc = () => {
  return (
    <section id="about" className="w-[70%] mx-auto max-md:w-full">
      <div className="w-[80%] mx-auto md:flex md:justify-center md:items-center md:flex-col md:mt-24 mt-16">
        <h2 className="text-white mt-8 z-50 text-xl font-bold mb-3 md:text-3xl light:text-[#3B3B3B]">
          نگاهی کلی به کارهای من
        </h2>
        <p className="text-sm text-gray-200 max-md:max-w-[300px] md:text-lg light:text-[#3B3B3B] md:text-center">
          اینجا می‌توانید مروری بر کارهای من را ببینید؛ از پروفایل LeetCode که واقعاً به آن افتخار می‌کنم،
          آخرین پروژه‌ها، گیت‌هاب، لینکدین و چیزهایی که به آن‌ها علاقه‌مندم.
        </p>
      </div>

      <PBentoGridc className="w-full pb-30 pt-12 max-md:pb-12 max-md:pt-6">
        {PEgridItems.map((item) => (
          <PBentoGridItemc
            id={item.id}
            key={item.id}
            title={item.title}
            description={item.description}
            url={item.url}
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
