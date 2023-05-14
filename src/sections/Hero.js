import {AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai'
import {BsDiscord,BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import React from "react";
import AnimatedComponent from '../components/AnimatedComponent';

const Hero = () => {
  return (

      <div className="Hero  mx-[1.5rem] pt-52 sm:pt-8 sm:py-8 sm:pb-14  sm:mt-[21rem] relative " >
          <h1 className="font-extrabold font-monument text-white text-[2.2rem] leading-[45px]  sm:text-[48px] sm:leading-[60px]">
         <AnimatedComponent parentClass={"w-[75%]"} className="space-y-4 md:space-y-12 animate-left">
            Shaping The Future of <br/>          
         </AnimatedComponent>
         <AnimatedComponent parentClass={"w-[75%]"} className="space-y-4 md:space-y-12 animate-left-delay">
            DeFi On{" "}
            <span className="text-[#6BFF83]"> Arbitrum</span>
         </AnimatedComponent>
          </h1>

          
          
         
          <p className="text-base text-[#FFFFFF]  animate-left-delay-text sm:w-2/3 w-[84%]  font-red-hat md:text-sm md:leading-6 lg:text-lg lg:leading-8">
            LAxis Finance is the first
            <span className="text-[#6BFF83] mx-1">all-in-one</span>
            DeFi Protocol. Ax your way to the future of DeFi!
            <br/>
            Axis Finance is the first  <span className="text-[#6BFF83] mx-1">all-in-one</span> DeFi Protocol.
          </p>
        <AnimatedComponent parentClass={" w-[69%] pt-[150px] overflow-hidden"} className="space-y-4 md:space-y-12 animate-left">
         
         
        </AnimatedComponent>
        <div className="hero-social-box relative sm:absolute  sm:right-[-95px] animate-top-bottom">
          <a href='/' className='first-child anim'><FaTelegramPlane/></a>
          <a href='/' className='second-child'> <BsTwitter/></a>
          <a href='/' className='third-child'><BsDiscord/></a>
          <a href='/' className='fourth-child'><AiOutlineInstagram/></a>
          <a href='/' className='last-child'><AiFillYoutube/></a>
         
        </div>
    </div>
  );
};

export default Hero;
