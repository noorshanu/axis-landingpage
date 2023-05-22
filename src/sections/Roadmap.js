import React from "react";
import RoadmapCard from "../components/RoadmapCard";
import Marquee from "react-fast-marquee";
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
  return (
    <div className="my-20  relative">
      {/* <div className="flex   rounded-[60px]  bg-black  place-items-center"> */}
      <Marquee>
        <div className="flex relative">
          <RoadmapCard data={{ ...cards[0], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[12px] left-32 sm:left-28 ">
            <video autoPlay loop muted id="about_video2"  className="w-[150px] sm:w-[200px]">
              <source src="assets/fox/im2.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div className="flex relative">
          <RoadmapCard data={{ ...cards[1], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[12px] left-32 sm:left-28">
            <video autoPlay loop muted id="about_video2"  className="w-[150px] sm:w-[200px]">
              <source src="assets/fox/im5.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div className="flex relative">
          <RoadmapCard data={{ ...cards[2], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[45px] left-32 sm:left-28">
            <video autoPlay loop muted id="about_video2"  className="w-[150px] sm:w-[150px]">
              <source src="assets/fox/im4.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div className="flex relative">
          <RoadmapCard data={{ ...cards[3], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[12px] left-32 sm:left-28 ">
            <video autoPlay loop muted id="about_video2" className="w-[150px] sm:w-[200px]">
              <source src="assets/fox/im3.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div className="flex relative">
          <RoadmapCard data={{ ...cards[0], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[12px] left-32 sm:left-28">
            <video autoPlay loop muted id="about_video2" className="w-[150px] sm:w-[200px]">
              <source src="assets/fox/im7.webm" />
            </video>
          </div>
          <img
            src="/assets/images/line.png"
            className="self-end hidden sm:flex"
            alt=""
          />
        </div>

        <div className="flex relative">
          <RoadmapCard data={{ ...cards[1], img: "/assets/icons/frame.svg" }} />
          <div className=" text-center absolute top-[12px] left-32 sm:left-28 ">
            <video autoPlay loop muted id="about_video2"  className="w-[150px] sm:w-[200px]">
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
      <img src="assets/icons/blur.png" className="blur absolute left-[29%] top-0" alt=""/>

      {/* </div> */}
    </div>
  );
};

export default Roadmap;
