import React from "react";

const About = () => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 sm:mt-20 sm:space-x-5">
      <img src="/assets/images/about.png" className="w-full h-auto hidden sm:flex" />
      <img src="/assets/images/about-sm.png" className="w-full h-auto flex sm:hidden" />
      <div className="flex flex-col justify-center items-start text-white sm:w-2/3">
        <h1 className="font-monument text-4xl">What Is Axis Finance?</h1>
        <p className="font-red-hat text-xl mt-3">
          We combined all the features from your favourite protocols and
          delivered even more. AI suggester, Gasless swap, trading - you name
          it.
        </p>
      </div>
    </div>
  );
};

export default About;
