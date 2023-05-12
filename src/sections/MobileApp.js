import React from "react";

const MobileApp = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:mt-20 sm:space-x-16">
      <img alt=' '
        src="/assets/images/mobileApp.svg"
        className="w-full h-auto hidden sm:flex"
      />
      <div className="flex flex-col  space-y-10 justify-center items-start text-white  sm:mt-0 ">
        <h1 className="font-monument text-[#ACFFB9] text-2xl font-bold sm:text-3xl text-center sm:text-start sm:mx-0 mx-auto">
          Axis Mobile App
        </h1>
        <p className="font-red-hat  text-xl text-center sm:text-start">
          Axis goes even further when it comes to accessibility of crypto
          products & services. We will launch a mobile app allowing users to
          manage their crypto kingdom.
        </p>
        <div className="mx-auto sm:mx-0">
          <p className="font-red-hat mx-auto text-xl mt-3 text-center sm:text-start">Launch: TBA</p>
          <p className="font-red-hat mx-auto text-xl text-center sm:text-start">Where: App Store & Google Play</p>
        </div>
        <button className="hidden sm:flex py-6 px-12 rounded-full bg-white text-black font-red-hat font-bold">
          Waiting List
        </button>
      </div>
      <img alt=' '
        src="/assets/images/mobileApp.svg"
        className="w-full h-auto mt-8 flex sm:hidden"
      />
       <button className="flex sm:hidden mx-auto mt-12 py-6 px-12 rounded-full bg-white text-black font-red-hat font-bold">
          Waiting List
        </button>
    </div>
  );
};

export default MobileApp;
