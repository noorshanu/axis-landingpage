import React from "react";

const FollowUs = () => {
  return (
    <div className='mt-24 bg-[url("/public/assets/images/follow-us-bg.svg")] h-fit bg-cover rounded-tl-[5rem] rounded-tr-[5rem]'>
      <div className="mx-auto  max-w-7xl px-4 sm:px-12 flex flex-col justify-evenly items-center h-[450px]">
        <p className="font-red-hat text-lg font-bold text-white">
        Don't miss out!
        </p>
        <h1 className="font-monument text-white text-4xl text-center max-w-[33rem]">Stay up-to-date with all Axis Finance updates!</h1>
        <button className="bg-black py-5 px-8 rounded-full font-red-hat text-white">Follow Us</button>
      </div>
    </div>
  );
};

export default FollowUs;
