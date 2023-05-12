import React from "react";

const Path = () => {
  return (
    <>
      <h1 className=" mt-32 mb-12 font-monument text-[#ACFFB9] text-2xl font-bold sm:text-3xl text-center mx-auto">
        Axis Roadmap
      </h1>
      <div className="flex relative">
        <img alt=' ' src="/assets/images/path.svg" className="absolute px-12" />
        <img alt=' ' src="/assets/images/path.svg" className="invisible" />
        <div className=" p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute top-[32%] left-[-45px] rounded-full">
          <div className="group relative roadmapBox  rounded-full h-auto w-[8vw] flex justify-center items-center text-white">
            <img alt=' ' src="/assets/images/path-circle.svg" className="w-full h-auto invisible"/>
            <div className="absolute">
              <p className="font-organetto text-[12px] sm:text-sm md:text-base">Q1</p>
              <p className="font-red-hat font-bold">2023</p>
            </div>
          <img alt=' ' src="/assets/images/path-hover-box.svg" className=" max-w-[30vw] top-28 -left-10 h-auto group-hover:flex hidden absolute"/>
          </div>
        </div>
        <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute top-[7%] left-[23.8%] rounded-full">
          <div className="relative roadmapBox rounded-full h-auto w-[8vw] flex justify-center items-center text-white">
            <img alt=' ' src="/assets/images/path-circle.svg" className="w-full h-auto invisible"/>
            <div className="absolute">
            <p className="font-organetto text-[12px] sm:text-sm md:text-base">Q2</p>
              <p className="font-red-hat font-bold">2023</p></div>{" "}
          </div>
        </div>

        <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute bottom-[12%] left-[36.5%] rounded-full">
          <div className="relative roadmapBox  rounded-full h-auto w-[8vw] flex justify-center items-center text-white">
            <img alt=' ' src="/assets/images/path-circle.svg" className="w-full h-auto invisible"/>
            <div className="absolute">
              <p className="font-organetto text-[12px] sm:text-sm md:text-base">Q3</p>
              <p className="font-red-hat font-bold">2023</p></div>{" "}
          </div>
        </div>

        <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute top-[7%] left-[49.3%]  rounded-full">
          <div className="relative roadmapBox rounded-full h-auto w-[8vw] flex justify-center items-center text-white">
            <img alt=' ' src="/assets/images/path-circle.svg" className="w-full h-auto invisible"/>
            <div className="absolute">
              <p className="font-organetto text-[12px] sm:text-sm md:text-base">Q4</p>
              <p className="font-red-hat font-bold">2023</p></div>{" "}
          </div>
        </div>
        <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit  absolute bottom-[12%] right-[27.5%]   rounded-full">
          <div className="relative roadmapBox rounded-full h-auto w-[8vw] flex justify-center items-center text-white">
            <img alt=' ' src="/assets/images/path-circle.svg" className="w-full h-auto invisible"/>
            <div className="absolute">
              <p className="font-organetto text-[12px] sm:text-sm md:text-base">Q5</p>
              <p className="font-red-hat font-bold">2023</p></div>{" "}
          </div>
        </div>

        <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit  absolute top-[40%] right-0  rounded-full">
          <div className="relative roadmapBox  rounded-full h-auto w-[8vw] flex justify-center items-center text-white">
            <img alt=' ' src="/assets/images/path-circle.svg" className="w-full h-auto invisible"/>
            <div className="absolute">
              <p className="font-organetto text-[12px] sm:text-sm md:text-base">Q6</p>
              <p className="font-red-hat font-bold">2023</p></div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Path;
