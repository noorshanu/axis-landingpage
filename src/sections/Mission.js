import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

const Mission = () => {
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
          style={{ height: "500px" }}
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

      <div className="  mt-16 sm:mt-20 ">
        <div className="mx-auto sub-info relative">
          <img
            src="assets/images/whiteLine.svg"
            className="left-0 absolute hidden sm:block"
            alt=""
          />

          <div className="border-right">
            <h1 className="text-[#6BFF83] font-monument font[400] text-3xl">
              2650
            </h1>
            <p className="text-[#fff] font-red-hat font-[500] text-xl mt-6">
              Beta testers
            </p>
          </div>

          <div className="border-right">
            <h1 className="text-[#6BFF83] font-monument font[400] text-3xl">
              2650
            </h1>
            <p className="text-[#fff] font-red-hat font-[500] text-xl mt-6">
              Beta testers
            </p>
          </div>

          <div>
            <h1 className="text-[#6BFF83] font-monument font[400] text-3xl">
              2650
            </h1>
            <p className="text-[#fff] font-red-hat font-[500] text-xl mt-6">
              Beta testers
            </p>
          </div>
          <img
            src="assets/images/whiteLine.svg"
            alt=""
            className="right-0 absolute hidden sm:block"
          />
        </div>
      </div>
    </>
  );
};

export default Mission;
