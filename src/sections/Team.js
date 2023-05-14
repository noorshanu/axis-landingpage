import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Autoplay, Pagination, EffectCoverflow]);

const Team = () => {
  return (
    <div className="mb-24">
      <div className="mt-24 ">
        <div className=" col-span-2  py-2 ">
          <h1 className="capitalize text-4xl mb-3 text-[#6BFF83] font-monument text-center">
            our team
          </h1>
        </div>
      </div>

      <div className="m-auto text-center">
        <div className="App  mt-16 mb-6 sm:mt-20 ">
          <Swiper
            loop={true}
            speed={1400}
            autoplay={{
              delay: 1,
              disableOnInteraction: true,
              // reverseDirection:true,
            }}
            initialSlide={2}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 3,
              slideShadows: true
            }}
            slidesPerView={3}
            centeredSlides={true}
            style={{ height: "500px" }}
          >
            <SwiperSlide>
              <img src="assets/team/team1.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/team/team2.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="assets/team/team3.png" alt="" />
            </SwiperSlide>
          
          </Swiper>
        </div>

     
      </div>
    </div>
  );
};

export default Team;
