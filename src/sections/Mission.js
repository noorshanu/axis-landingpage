import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import { useRef } from "react";
import { useEffect } from "react";
import useIsInViewPort from "../hooks/useIsInViewPort";

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
      <div className="App  mt-16 mb-6 sm:mt-20 ">
        <Swiper
          loop={true}
          speed={1400}
          autoplay={{
            delay: 1,
            disableOnInteraction: true,
            // reverseDirection:true,
          }}
          initialSlide={3}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          slidesPerView={4}
          centeredSlides={true}
          breakpoints={{
            340: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1560: {
              slidesPerView: 4,
            },
          }}
          style={{ height: "700px" }}
        >
          <SwiperSlide>
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/images/main.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="  mt-16 sm:mt-20  relative">
        <div className="mx-auto sub-info relative" ref={ref}>
          <img
            src="assets/images/whiteLine.svg"
            className="left-[-10px] top-[-21em] absolute hidden sm:block"
            alt=""
          />

          <div className="border-right">
            <h1
              className={`${
                showAnimation ? "text-flicker-in-glow" : "text-[#6BFF83]"
              } font-monument font[400] text-3xl`}
            >
              2650
            </h1>
            <p
              className={`${
                showAnimation ? " text-flicker-in-glow-p " : "text-[#fff]"
              }   font-red-hat font-[500] text-xl mt-6`}
            >
              Beta testers
            </p>
          </div>

          <div className="border-right">
            <h1
              className={`${
                showAnimation ? "text-flicker-in-glow-2" : "text-[#6BFF83]"
              }   font-monument font[400] text-3xl`}
            >
              2650
            </h1>
            <p
              className={` ${
                showAnimation ? " text-flicker-in-glow-p-2 " : "text-[#fff]"
              } font-red-hat font-[500] text-xl mt-6`}
            >
              Beta testers
            </p>
          </div>

          <div>
            <h1
              className={`${
                showAnimation ? "text-flicker-in-glow" : "text-[#6BFF83]"
              }  font-monument font[400] text-3xl`}
            >
              2650
            </h1>
            <p
              className={`${
                showAnimation ? " text-flicker-in-glow-p " : "text-[#fff]"
              }  font-red-hat font-[500] text-xl mt-6`}
            >
              Beta testers
            </p>
          </div>
        
          <img
            src="assets/images/whiteLine.svg"
            alt=""
            className="right-0 top-[-21em] absolute hidden sm:block"
          />
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
