import {AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'
import {BsDiscord,BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import React from "react";
import AnimatedComponent from '../components/AnimatedComponent';

const Hero = () => {
  return (

      <div className="Hero  mx-[1.5rem] pt-64 sm:pt-8 sm:py-8 sm:pb-14  sm:mt-[21rem] relative " >
        <AnimatedComponent className="space-y-4 md:space-y-12 animate-left">
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
         
         
        </AnimatedComponent>
        <div className="hero-social-box relative sm:absolute  sm:right-[-95px] animate-top-bottom">
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
