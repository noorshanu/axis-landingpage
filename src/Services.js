import React from "react";

const Services = () => {
  return (
    <div className="mt-12 grid sm:grid-cols-2 gap-y-4 sm:space-x-10">
      <div className="rounded-3xl bg-[url('../public/assets/images/outer-rect.svg')] bg-cover border border-white  self-start pt-4 sm:pt-16 sm:px-12 px-6">
        <div className="bg-[url('../public/assets/images/inner-rect.svg')] bg-cover w-full rounded-3xl font-monument text-white font-[800] sm:py-12 sm:px-8 px-4 py-8 text-[18px] sm:text-3xl text-center sm:text-start">
          What <span className="text-[#5DFF77]"> Problems </span> Are We
          Solving?
        </div>
        <p className="py-8 sm:py-12 px-4 text-white font-red-hat text-[11px] sm:text-lg text-center sm:text-start ">
          In the current DeFi world, users have to hop between different
          protocols to reach the goal. The proliferation of protocols has
          highlighted the need for one DApp that meets users' needs.
        </p>
      </div>
      <div className="rounded-3xl bg-[url('../public/assets/images/outer-rect.svg')] bg-cover border border-white  self-end pt-4 sm:pt-16 sm:px-12 px-6">
        <div className="bg-[url('../public/assets/images/inner-rect.svg')] bg-cover w-full rounded-3xl font-monument text-white font-[800] py-8 sm:py-12 sm:px-8 text-[16px] sm:text-3xl md:pr-14 text-center sm:text-start px-12">
        Why To   <span className="text-[#10FF37]"> Use  </span> Axis?
        </div>
        <p className="py-8 sm:py-12 px-4 text-white font-red-hat text-[11px] sm:text-lg md:pr-8  text-center sm:text-start">
        Choose Axis Finance over other DeFi platforms and enjoy its comprehensive range of DeFi functionalities.
        </p>
      </div>
    </div>
  );
};

export default Services;
