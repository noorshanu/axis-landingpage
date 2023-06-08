import React, { useEffect, useRef, useState } from "react";
import useIsInViewport from "./hooks/useIsInViewPort";

const Newalater = () => {
  
  return (
    <div>
   
    <div className="mx-auto py-12  max-w-7xl px-4 sm:px-12 relative">
    <img src="assets/moons.png" alt="" className="a absolute top-[-18px] left-[-129px]"/>
      <img src="assets/shade.png" alt="" className="a absolute top-[95px] left-[61px]"/>
      <div className=" font-monument wishlist px-5 flex items-center m-auto font-normal text-xl justify-center gap-2 text-white  w-full h-[260px] sm:h-[180px] my-12 rounded-lg cursor-pointer bg-cover">
        <span className='z-50' data-aos="fade-left" data-aos-duration="1000">
          Become a BETA tester now
        </span>{" "}
        <form className={`sub-form flex gap-x-1 justify-between w-full sm:w-fit sm:gap-x-2 sm:ml-3 mt-5 md:mt-0 `} data-aos="fade-right" data-aos-duration="1000">
          {" "}
          <input
            type="email"
            placeholder="Email Address"
            className="input-sub sm:text-base text-[13px] px-6 sm:py-5 py-3"
          />{" "}
          <a
            href="/"
            className="sm:py-5 py-3  bg-black whitespace-nowrap rounded-[64px] font-red-hat h-fit px-8 font-[300] text-[12px] sm:text-[18px]"
          >
            Try Now
          </a>
        </form>
      </div>

      {/* <Services /> */}
    </div>
    </div>
  );
};

export default Newalater;
