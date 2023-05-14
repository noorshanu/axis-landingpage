import React from "react";

const Road = () => {
  return (
    <>
      <h1 className=" mt-32 mb-12 font-monument text-[#6BFF83] text-2xl font-bold sm:text-3xl text-center mx-auto">
        Roadmap
      </h1>
      <div className="sm:flex relative text-center hidden">
        <img src="assets/images/roadmap.svg" alt=""/>
      </div>
      <div className="sm:hidden relative text-center flex">
        <img src="assets/images/roadmap-mob.svg" alt="" className="ml-[-46px]"/>
      </div>
    </>
  );
};

export default Road;
