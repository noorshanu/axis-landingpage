import { RocketLaunchIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/24/solid";
import React from "react";

const Hero = () => {
  return (
      <div className="Hero sm:min-h-[525px] py-7 sm:pb-7 pb-[16.75rem] sm:mt-12 grid grid-cols-1 md:grid-cols-2 md:gap-x-10  lg:grid-cols-2 lg:gap-x-56">
        <div className="space-y-8 md:space-y-12 flex flex-col justify-center">
          <h1 className="font-extrabold font-monument text-white text-[2.5rem] leading-[45px]  sm:text-[48px] sm:leading-[60px]">
            Shaping The Future of DeFi On{" "}
            <span className="text-[#6BFF83]"> Arbitrum</span>
          </h1>
          <p className="text-base text-[#FFFFFF]  sm:w-2/3 w-[84%]  font-red-hat md:text-sm md:leading-6 lg:text-lg lg:leading-8">
            LAxis Finance is the first
            <span className="text-[#6BFF83] mx-1">all-in-one</span>
            DeFi Protocol. Ax your way to the future of DeFi!
          </p>
          <button className="bg-white rounded-full w-fit text-black font-medium font-red-hat flex justify-center items-center px-3 py-2">
            <img src="/assets/icons/mouse.png" className="mr-1 h-6 w-6" />
            scroll down
          </button>
          <div className="flex items-center space-x-4">
            <img src="/assets/icons/twitter.png" />
            <img src="/assets/icons/discord.png" />
          </div>
        </div>
        <div>
          {/* <img
          alt=""
          className="w-full max-w-2xl rounded-md"
          src={}
         
        /> */}
        </div>
      </div>
  );
};

export default Hero;
