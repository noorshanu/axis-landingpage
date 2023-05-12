import {AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'
import {BsDiscord,BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import React from "react";

const Hero = () => {
  return (
      <div className="Hero  mx-[1.5rem] py-8 sm:pb-14 pb-[27rem] sm:mt-[21rem] relative " >
        <div className="space-y-4 md:space-y-12 ">
          <h1 className="font-extrabold font-monument text-white text-[2.2rem] leading-[45px]  sm:text-[48px] sm:leading-[60px]">
            Shaping The Future of <br/> DeFi On{" "}
            <span className="text-[#6BFF83]"> Arbitrum</span>
          </h1>
          <p className="text-base text-[#FFFFFF]  sm:w-2/3 w-[84%]  font-red-hat md:text-sm md:leading-6 lg:text-lg lg:leading-8">
            LAxis Finance is the first
            <span className="text-[#6BFF83] mx-1">all-in-one</span>
            DeFi Protocol. Ax your way to the future of DeFi!
            <br/>
            Axis Finance is the first  <span className="text-[#6BFF83] mx-1">all-in-one</span> DeFi Protocol.
          </p>
         
         
        </div>
        <div className="hero-social-box absolute right-[-95px]">
          <a href='/'><FaTelegramPlane/></a>
          <a href='/'> <BsTwitter/></a>
          <a href='/'><BsDiscord/></a>
          <a href='/'><AiOutlineInstagram/></a>
          <a href='/'><AiFillYoutube/></a>
         
        </div>
      </div>
  );
};

export default Hero;
