import React from "react";

const RoadmapCard2 = ({
  top,
  left,
  maxw,
  imgHead,
  h1,
  p1,
  p2,
  className,
  p3,
  fontSize = "0.65vw",
}) => {
  return (
    <div className={`absolute top-[${top}] left-[${left}]   max-w-[${maxw}]`}>
      {/* <div className={`absolute top-[20%] left-[3%] max-w-[12%]`}> */}
      <h1 className="text-white font-organetto font-semibold text-[24px] mt-[10%] mb-[6%]">
        {h1}
      </h1>
      <img src={imgHead} alt="" className={`${className}`} />
      <div className="space-y-[8%]">
        <p
          className={`text-white font-red-hat ${
            fontSize != "0.65vw"
              ? `xl:text-[12px] 2xl:text-[14px] text-[${fontSize}]`
              : `xl:text-[11px] 2xl:text-[10.6px] text-[${fontSize}]`
          }   font-normal`}
        >
          {p1}
        </p>
        <p
          className={`text-white font-red-hat ${
            fontSize != "0.65vw"
              ? `xl:text-[12px] 2xl:text-[14px] text-[${fontSize}]`
              : `xl:text-[11px] 2xl:text-[10.6px] text-[${fontSize}]`
          }  font-normal`}
        >
          {p2}
        </p>
        <p
          className={`text-white font-red-hat ${
            fontSize != "0.65vw"
              ? `xl:text-[12px] 2xl:text-[15px] text-[${fontSize}]`
              : `xl:text-[11px] 2xl:text-[10.6px] text-[${fontSize}]`
          }  font-normal`}
        >
          {p3}
        </p>
      </div>
    </div>
  );
};

export default RoadmapCard2;
