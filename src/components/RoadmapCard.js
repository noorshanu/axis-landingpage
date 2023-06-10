import React from "react";

const RoadmapCard = ({ data: { img, title, text } }) => {
  return (
    <>
      <div className="w-[420px] h-[300px] sm:h-[480px] lg:h-[27rem] rounded-lg shadow dark:border-gray-700  relative">
        <div className="mb-5  rounded-[33px] w-[420px]  flex justify-center items-center p-8">
          <img src={img} className="w-auto sm:h-52 h-32" alt="" />
        </div>
        <h5 className="text-lg sm:text-2xl mb-2 font-monument text-white text-center">
          {title}
        </h5>

        <p className="text-white font-red-hat text-sm sm:text-lg w-[75%] mx-auto text-center">
          {text}
        </p>
      </div>

   
    </>
  );
};

export default RoadmapCard;
