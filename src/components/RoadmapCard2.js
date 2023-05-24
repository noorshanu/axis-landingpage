import React from "react";

const RoadmapCard2 = ({
  top,
  left,
  maxw,
  h1,
  p1,
  p2,
  p3,
  fontSize = "0.75vw",
}) => {
  return (
    <div className={`absolute top-[${top}] left-[${left}]   max-w-[${maxw}]`}>
      {/* <div className={`absolute top-[20%] left-[3%] max-w-[12%]`}> */}
      <h1 className="text-white font-organetto font-semibold text-[2vw] mt-[10%] mb-[6%]">
        {h1}
      </h1>
      <div className="space-y-[8%]">
        <p
          className={`text-white font-red-hat text-[${fontSize}]  font-normal`}
        >
          {p1}
        </p>
        <p className={`text-white font-red-hat text-[${fontSize}] font-normal`}>
          {p2}
        </p>
        <p className={`text-white font-red-hat text-[${fontSize}] font-normal`}>
          {p3}
        </p>
      </div>
    </div>
  );
};

export default RoadmapCard2;
