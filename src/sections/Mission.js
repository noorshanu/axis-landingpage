import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";
import CountUp from "react-countup";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useRef } from "react";
import { useEffect } from "react";
import useIsInViewPort from "../hooks/useIsInViewPort";
import ReactVisibilitySensor from "react-visibility-sensor";

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

const Mission = () => {
  let [showAnimation, setShowAnimation] = useState(false);
  let [playAnimation, setPlayAnimation] = useState(false);

  const ref = useRef();
  let isInViewPort = useIsInViewPort(ref);

  useEffect(() => {
    if (isInViewPort && !playAnimation) {
      setShowAnimation(true);
      setPlayAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
      }, 800);
    }
  }, [isInViewPort]);

  return (
    <>
      <div className="App pt-20 sm:pt-16 mb-0 sm:mb-6 sm:mt-20  w-4/5 m-auto">
        <Swiper
          loop={true}
          speed={1400}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
            // reverseDirection:true,
          }}
          initialSlide={6}
          className="h h-auto sm:h-[830px] "
          effect="coverflow"
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: -80,

            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          breakpoints={{
            420: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5,
            },
            1560: {
              slidesPerView: 6,
            },
          }}
        >
          <SwiperSlide className="flex items-center h-full">
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center h-full">
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center h-full">
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center h-full">
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center h-full">
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex items-center h-full">
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="  mt-20 sm:mt-20  relative my-3">
        <img
          src="assets/images/whiteLine.svg"
          className="left-[-10px] top-[-21em] absolute hidden sm:block"
          alt=""
        />
        <div
          className="mx-auto sub-info grid sm:grid-cols-3 grid-cols-1 gap-y-2 relative place-items-center"
          ref={ref}
        >
          <div className=" relative">
            <h1
              className={`${
                showAnimation ? "text-flicker-in-glow" : "text-[#6BFF83]"
              } font-monument font[400] text-3xl`}
            >
              <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div>
                    {" "}
                   
                    {isVisible ? <CountUp end={2023} /> : null}<span className="text-black">.</span>
                  </div>
                )}
              </ReactVisibilitySensor>
            </h1>
            <p
              className={`${
                showAnimation ? " text-flicker-in-glow-p " : "text-[#fff]"
              }   font-red-hat font-[500] text-xl mt-6`}
            >
              Beta testers
            </p>
            <img
              src="assets/line.png"
              alt=""
              className="hidden sm:flex a absolute right-[-30px] xl:right-[-15rem] top-[-38px]"
            />
             <img
            src="assets/line3.png"
            className="  block sm:hidden  h-full w-auto m-auto mt-8 mb-8"
            alt=""
          />
          </div>
         
          <div className=" relative">
            <h1
              className={`${
                showAnimation ? "text-flicker-in-glow-2" : "text-[#6BFF83]"
              }   font-monument font[400] text-3xl`}
            >
              <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div>{isVisible ? <CountUp end={20} /> : null} GWEI</div>
                )}
              </ReactVisibilitySensor>
            </h1>
            <p
              className={` ${
                showAnimation ? " text-flicker-in-glow-p-2 " : "text-[#fff]"
              } font-red-hat font-[500] text-xl mt-6`}
            >
              Per transaction
            </p>
          </div>

          <img
            src="assets/line3.png"
            alt=""
            className=" flex sm:hidden mt-8 mb-8 "
          />
          <div className="relative">
            <h1
              className={`${
                showAnimation ? "text-flicker-in-glow" : "text-[#6BFF83]"
              }  font-monument font[400] text-3xl`}
            >
              <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                  <div>${isVisible ? <CountUp end={70} /> : null}M</div>
                )}
              </ReactVisibilitySensor>
            </h1>
            <p
              className={`${
                showAnimation ? " text-flicker-in-glow-p " : "text-[#fff]"
              }  font-red-hat font-[500] text-xl mt-6`}
            >
              TVL per Quarter*
            </p>
            <img
              src="assets/line2.png"
              alt=""
              className="hidden sm:flex  a absolute left-[-30px] xl:left-[-15rem] top-[-38px]"
            />
          </div>
        </div>

        <img
          src="assets/icons/moon-1.png"
          alt=""
          className="left-[-9em] absolute  sm:block"
        />
      </div>
    </>
  );
};

export default Mission;
