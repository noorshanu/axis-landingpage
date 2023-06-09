import React, { useRef } from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane, FaDiscord } from "react-icons/fa";
import useIsInViewport from "../hooks/useIsInViewPort";

const Footer = () => {
  let ref = useRef();
  let isOnViewPort = useIsInViewport(ref);

  return (
    <div className="footer py-8  relative ">
      <div className="side-green"></div>
      <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
        <div className="grid sm:grid-cols-2 grid-cols-1 md:grid-cols-4 gap-y-4">
          <div className="flex items-center">
            <div>
              <img
                src="/assets/images/logo.svg"
                alt=""
                className={`${isOnViewPort ? "slide-left-footer-1" : ""}`}
              />
              <h1
                className={`text-[#11FF37] font-monument text-2xl font-bold mt-5 ${
                  isOnViewPort ? "slide-left-footer-2" : ""
                }`}
              >
                Join The DeFi Revolution
              </h1>
            </div>
            <img src="/assets/images/line.png" alt="" />
          </div>
          <div className="sm:col-span-2 sm:px-12 py-6 flex justify-between">
            <div className="flex-1">
              <h1
                className={`font-monument text-white font-medium ${
                  isOnViewPort ? "slide-left-footer" : ""
                }`}
              >
                PAGES
              </h1>
              <div className="flex justify-between mt-5">
                <ul className="text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li
                    className={`cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-1" : ""
                    }`}
                  >
                    Home
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-2" : ""
                    }`}
                  >
                    Mission
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-2" : ""
                    }`}
                  >
                    About Us
                  </li>
                </ul>
                <ul className="ml-6 text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li
                    className={`cursor-pointer ${
                      isOnViewPort ? "slide-left-footer" : ""
                    }`}
                  >
                    Features
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-1" : ""
                    }`}
                    ref={ref}
                  >
                    NFTs
                  </li>
                  <li
                    className={`cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-2" : ""
                    }`}
                  >
                    Mobile
                  </li>
                </ul>
              </div>
            </div>
            <div className="ml-20 flex-1">
              <h1
                className={`font-monument text-white font-medium ${
                  isOnViewPort ? "slide-left-footer" : ""
                }`}
              >
                SOCIALS
              </h1>
              <div className="flex mt-5">
                <ul className="text-white font-red-hat opacity-[0.57] font-light text-base space-y-4">
                  <li
                    className={`flex gap-2 items-center cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-1" : ""
                    }`}
                  >
                    <AiOutlineTwitter /> Twitter
                  </li>
                  <li
                    className={`flex gap-2 items-center cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-2" : ""
                    }`}
                  >
                    <FaTelegramPlane /> Telegram
                  </li>
                  <li
                    className={`flex gap-2 items-center cursor-pointer ${
                      isOnViewPort ? "slide-left-footer-2" : ""
                    }`}
                  >
                    <FaDiscord /> Discord
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="py-6 space-y-5">
            <h1
              className={`text-white font-monument ${
                isOnViewPort ? "slide-left-footer" : ""
              }`}
            >
              Mobile App
            </h1>
            <p
              className={`text-white opacity-50 font-barlow max-w-[180px] ${
                isOnViewPort ? "slide-left-footer-1" : ""
              }`}
            >
              Sign up for the waiting list to get notified when we will release
              the BETA version!
            </p>
            {/* <div
              className={`bg-[#0F0F11] w-full h-11 p-2 pr-1 pl-4 flex justify-between items-center ${
                isOnViewPort ? "slide-left-footer-2" : ""
              }`}
            >
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border-none outline-none w-[70%] text-white text-sm"
              />
              <button className="w-[30%] bg-white text-black font-barlow font-medium text-sm py-2 px-3 cursor-pointer ">
                Subscribe
              </button>
            </div> */}
          </div>
        </div>
        <img
          src="/assets/images/line-footer.svg"
          className="w-[100%] my-12 h-auto mx-auto b"
          alt=""
        />
        <p className={`font-red-hat text-white opacity-50 mx-auto text-center text-sm ${isOnViewPort?"slide-left-footer-2":""}`}>
          Copyright @ 2023. All rights recieved
        </p>
      </div>
    </div>
  );
};

export default Footer;
