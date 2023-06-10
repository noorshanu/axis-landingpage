import React, { useRef } from "react";
import RoadmapCard from "../components/RoadmapCard";
import Marquee from "react-fast-marquee";
import useIsInViewport from "../hooks/useIsInViewPort";
let cards = [
  {
    title: "Dex",
    text: "Swap your favourite tokens & benefit from the gasless swap",
  },
  {
    title: "Presale launchpad",
    text: "Stay ahead of the innovation from the crypto space",
  },
  {
    title: "DAO",
    text: "Help the ecosystem to grow by contributing to the protocol",
  },

  {
    title: "Bigger Presale",
    text: "Stay ahead of the innovation from the crypto space",
  },
];
const Roadmap = () => {
  let ref = useRef();
  let isOnViewPort = useIsInViewport(ref);
  return (
    <div
      ref={ref}
      className={`${isOnViewPort ? "mt-0 mb-20 sm:my-20  relative slide-right-1" : ""}`}
    >
      {/* <div className="flex   rounded-[60px]  bg-black  place-items-center"> */}
      <Marquee className="slide-left-footer">
        <div
          className={`${isOnViewPort ? " relative flex  slide-right-1" : ""}`}
        >
          <RoadmapCard data={{ ...cards[0], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[14px]  sm:left-0 sm:right-0 left-32  ">
            <video
              autoPlay
              loop
              muted
              playsInline
              src="assets/fox/im2.webm"
              id="about_video2"
              className="w-[150px] sm:w-[200px]"
            >
            
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div
          className={`${isOnViewPort ? " relative flex  slide-right-1" : ""}`}
        >
          <RoadmapCard data={{ ...cards[1], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center   w-full flex justify-center  absolute items-center top-[16px] sm:top-[45px] left-0 right-0 ">
            <video
              autoPlay
              loop
              muted
              id="about_video2"
              className="relative w-[150px] sm:w-[200px]"
            >
              <source src="assets/fox/im5.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div
          className={`${isOnViewPort ? " relative flex  slide-right-1" : ""}`}
        >
          <RoadmapCard data={{ ...cards[2], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center   w-full flex justify-center  absolute items-center top-[28px] sm:top-[45px] left-0 right-0 ">
            <video
              autoPlay
              loop
              muted
              id="about_video2"
              className="w-[25%] sm:w-[150px]"
            >
              <source src="assets/fox/im4.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div
          className={`${isOnViewPort ? " relative flex  slide-right-1" : ""}`}
        >
          <RoadmapCard data={{ ...cards[3], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center  w-full flex justify-center  absolute top-[15px]  left-0 right-0   ">
            <video
              autoPlay
              loop
              muted
              id="about_video2"
              className="w-[150px] sm:w-[200px]"
            >
              <source src="assets/fox/im3.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div
          className={`${isOnViewPort ? " relative flex  slide-right-1" : ""}`}
        >
          <RoadmapCard data={{ ...cards[0], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center  w-full flex justify-center  absolute top-[12px]  left-0 right-0  ">
            <video
              autoPlay
              loop
              muted
              id="about_video2"
              className="w-[150px] sm:w-[200px]"
            >
              <source src="assets/fox/im7.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div
          className={`${isOnViewPort ? " relative flex  slide-right-2" : ""}`}
        >
          <RoadmapCard data={{ ...cards[1], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center  w-full flex justify-center  absolute top-[12px] left-0 right-0   ">
            <video
              autoPlay
              loop
              muted
              id="about_video2"
              className="w-[150px] sm:w-[200px]"
            >
              <source src="assets/fox/im6.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>
      </Marquee>
      <img
        src="assets/icons/blur.png"
        className="blur absolute left-[29%] top-0"
        alt=""
      />

      {/* </div> */}
    </div>
  );
};

export default Roadmap;
