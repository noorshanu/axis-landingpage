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
    <div className="mb-24 mt-[24rem] relative">
      <div className="mt-12 ">
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
            speed={1700}
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
            breakpoints= {{
              340: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 1
              },
              1024: {
                slidesPerView: 3
              },
              1560: {
                slidesPerView: 3
              }
            }
            }
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
      <img src="assets/icons/road-side-1.png" className="top-[0em] right-[-9.7em] absolute hidden sm:block" alt=""/>
      <img src="assets/icons/team-side.png" className="top-0 left-[-13.7em] absolute hidden sm:block" alt=""/>
    </div>
  );
};

export default Team;
