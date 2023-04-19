import React from "react";

const Path = () => {
  return (
   <>
    <h1 className=" mt-32 mb-12 font-monument text-[#ACFFB9] text-2xl font-bold sm:text-3xl text-center mx-auto">
    Axis Roadmap
        </h1>
   <div className="flex relative">
      <img src="/assets/images/path.svg" className="absolute" />
      <img src="/assets/images/path.svg" className="invisible" />
      <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute top-[35%] rounded-full">
        <div className=" roadmapBox  rounded-full h-[17.5vh] w-[8vw] flex justify-center items-center text-white">
          <p>Q1</p>
          <p>2023</p>

        </div>
      </div>
      <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute top-[7%] left-[22%] rounded-full">
        <div className=" roadmapBox rounded-full h-[17.5vh] w-[8vw] flex justify-center items-center text-white">
          q2
        </div>
      </div>

      <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute bottom-[6%] left-[36%] rounded-full">
        <div className=" roadmapBox  rounded-full h-[17.5vh] w-[8vw] flex justify-center items-center text-white">
          q3
        </div>
      </div>

      <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit absolute top-[7%] left-[50%]  rounded-full">
        <div className=" roadmapBox rounded-full h-[17.5vh] w-[8vw] flex justify-center items-center text-white">
          q4
        </div>
      </div>
      <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit  absolute bottom-[6%] right-[26%]   rounded-full">
        <div className=" roadmapBox rounded-full h-[17.5vh] w-[8vw] flex justify-center items-center text-white">
          q5
        </div>
      </div>

      <div className="p-1 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37] h-fit w-fit  absolute top-[40%] right-0  rounded-full">
        <div className=" roadmapBox  rounded-full h-[17.5vh] w-[8vw] flex justify-center items-center text-white">
          q6
        </div>
      </div>
    </div>
    </>
  );
};

export default Path;
