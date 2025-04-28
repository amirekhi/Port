"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./Ui/Pin";

import { useTransition } from "react";
import { deleteProject } from "@/app/(Dash)/AddProject/actions";


const DashProjects = ({ projects }: any) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = (id: string) => {
    startTransition(async () => {
      const res = await deleteProject(id);
      if (res.success) {
        window.location.reload();
      } else {
        alert("Failed to delete project");
      }
    });
  };

  return (
    <div className="py-20 w-[70vw] mx-auto light:text-[#3B3B3B] text-white">
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item : any) => (
          <div
            className="relative lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 max-md:w-[80vw]"
            key={item._id}
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(item._id)}
              disabled={isPending}
              className="absolute top-0 right-0 bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center"
              title="Delete project"
            >
              ✕
            </button>

            <PinContainer title={item.title.en} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[70vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold text-white lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title.en}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des.en}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon : any, index : any) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple text-transparent  bg-gradient-to-r from-purple-300 to-purple-600 bg-clip-text">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashProjects;
