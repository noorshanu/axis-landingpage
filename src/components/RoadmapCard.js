import React from "react";

const RoadmapCard = ({ data: { img, title, text } }) => {
  return (
    <div class="w-[420px] h-[450px] lg:h-96 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
      <div class="mb-10 bg-gradient-to-r from-[rgba(255,255,255,0.09)] via-[rgba(255,255,255,0.0423)] to-[rgba(255,255,255,0.09)] rounded-[33px] w-[420px]  flex justify-center items-center p-8">
        <img src={img} className="w-auto sm:h-52 h-32" />
      </div>
      <h5 class="text-lg sm:text-2xl mb-4 font-monument text-white text-center">
        {title}
      </h5>
      <p class="text-white font-red-hat text-sm sm:text-lg w-[75%] mx-auto text-center">
        {text}
      </p>
    </div>
  );
};

export default RoadmapCard;
