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
];
const Roadmap = () => {
  return (
    <div className="my-20 ">
      {/* <div className="flex   rounded-[60px]  bg-black  place-items-center"> */}
      <Marquee>
        <div className="flex">
        <RoadmapCard data={{ ...cards[0], img: "/assets/icons/new.png" }} />   
       <img
        src="/assets/images/line.png"
        className="self-end hidden sm:flex"
        alt=""
      />
        </div>
      
        <div className="flex">
        <RoadmapCard data={{ ...cards[1], img: "/assets/icons/new.png" }} />   
       <img
        src="/assets/images/line.png"
        className="self-end hidden sm:flex"
        alt=""
      />
        </div>

        <div className="flex">
        <RoadmapCard data={{ ...cards[2], img: "/assets/icons/new.png" }} />   
       <img
        src="/assets/images/line.png"
        className="self-end hidden sm:flex"
        alt=""
      />
        </div>

        <div className="flex">
        <RoadmapCard data={{ ...cards[0], img: "/assets/icons/new.png" }} />   
       <img
        src="/assets/images/line.png"
        className="self-end hidden sm:flex"
        alt=""
      />
        </div>

        <div className="flex">
        <RoadmapCard data={{ ...cards[1], img: "/assets/icons/new.png" }} />   
       <img
        src="/assets/images/line.png"
        className="self-end hidden sm:flex"
        alt=""
      />
        </div>

        <div className="flex">
        <RoadmapCard data={{ ...cards[2], img: "/assets/icons/new.png" }} />   
       <img
        src="/assets/images/line.png"
        className="self-end hidden sm:flex"
        alt=""
      />
        </div>
      </Marquee>

      {/* </div> */}
    </div>
  );
};

export default Roadmap;
