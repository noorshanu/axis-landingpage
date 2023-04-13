import React from "react";

const Mission = () => {
  return (
    <div className="outline outline-[#ACFFB9] py-12 px-8 sm:p-24 mt-16 sm:mt-20 rounded-[40px]">
      <div className="mx-auto">
        <h1 className="text-[#ACFFB9] text-3xl font-monument text-center">
          The mission behind Axis
        </h1>
        <p className="text-white text-center font-red-hat mt-2">
          Here's the strong "why" behind the whole company:
        </p>
      </div>
      <div className="flex flex-wrap md:flex-nowrap md:mt-32 mt-12 justify-center space-x-5 space-y-4 items-center">
        <div className="space-y-5 text-white self-start font-red-hat">
          <h5 className="font-monument text-xl">Our Mission</h5>
          <p>Put DeFi right where it belongs</p>
          <p>Accelerate the mass adoption</p>
          <p>Make the life of web3 investors easier</p>
        </div>
        <img src="/assets/images/mission.png" className="self-center hidden md:flex  md:h-[18rem] lg:h-[28rem] w-auto"/>
        <img src="/assets/images/mission-sm.png" className="self-center flex md:hidden h-96 w-auto"/>
        <div className="space-y-5 text-white self-center font-red-hat">
          <h5 className="font-monument text-xl">Our Goals</h5>
          <p>Stay ahead the web3 trends</p>
          <p>Deliver seamless user experience</p>
          <p>Grow the ecosystem</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
