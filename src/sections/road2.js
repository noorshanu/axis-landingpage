import React, { useRef, useState } from "react";
import RoadmapCard2 from "../components/RoadmapCard2";
import { useEffect } from "react";
import useIsInViewport from "../hooks/useIsInViewPort";

const Road = () => {
  let [showAnimation, setShowAnimation] = useState(false);
  let ref = useRef();
  let animation = useIsInViewport(ref);
  useEffect(() => {
    if (animation) setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 6150);
  }, [animation]);
  return (
    <div className="relative" ref={ref}>
      <h1 className=" mt-12 sm:mt-32 mb-12  sm:text-[48px] text-center mx-auto text-5xl  text-[#6BFF83] font-[800] font-monument">
        Roadmap
      </h1>
      <video
        autoPlay
        
        muted
        id="about_video2"
        className={`w-full h-auto ${showAnimation ? "hidden sm:flex" : "hidden"}`}
      >
        <source src="assets/fox/frameAnm.mp4" />
      </video>
      <div
        className={`relative mx-10 sm:bg-[url('../public/assets/images/RoadmapFrame.svg')] bg-[url('../public/assets/images/roadmap-sm-bg.svg')] bg-center bg-no-repeat  bg-contain  sm:bg-cover `}
      >
        <img
          src="/assets/images/RoadmapFrame.svg"
          className={`w-full h-auto invisible ${showAnimation ? "hidden" : "sm:flex hidden"}`} alt=""
        />
        <img
          src="/assets/images/roadmap-sm-bg.svg"
          className={`w-full h-auto px-5 flex sm:hidden invisible`} alt=""
        />
        <div className={` inset-0 transition-opacity hidden sm:flex absolute duration-500 ${ showAnimation ? "opacity-0" : "opacity-100"}`}>
          <RoadmapCard2
            top={"16%"}
            left={"3%"}
            maxw={"12%"}
            h1={"Q3"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"16%"}
            left={"33%"}
            maxw={"12%"}
            h1={"Q1"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"55%"}
            left={"49.5%"}
            maxw={"16%"}
            h1={"Q2"}
            fontSize={"1vw"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"55%"}
            left={"17%"}
            maxw={"12%"}
            className={'mb-[14px] mt-[26px]'}
            imgHead={'assets/Q4.png'}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"5%"}
            left={"66%"}
            maxw={"12%"}
            h1={"Q3"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"55%"}
            left={"83%"}
            maxw={"12%"}
            imgHead={'assets/Q4.png'}
            className={'mb-[14px] mt-[26px]'}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
        </div>
        <div className="hidden top-[16%] top-[55%] top-[55%] max-w-[12%] max-w-[16%] text-[1vw] text-[14px] text-[0.65vw] left-[3%] left-[33%] left-[17%] top-[5%] left-[49.5%] left-[66%] left-[83%]" />
      </div>
     
    </div>
  );
};

export default Road;
