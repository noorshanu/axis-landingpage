import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);


const Mission = () => {
  return (
    <>
    
    <div className="App">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        }}
        slidesPerView={2}
        centeredSlides
        style={{ height: "500px" }}
      >
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-1.jpg)"
          }}
        >
          Slide 1
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-2.jpg)"
          }}
        >
          Slide 2
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-3.jpg)"
          }}
        >
          Slide 3
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-4.jpg)"
          }}
        >
          Slide 4
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-5.jpg)"
          }}
        >
          Slide 5
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-6.jpg)"
          }}
        >
          Slide 6
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-7.jpg)"
          }}
        >
          Slide 7
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-8.jpg)"
          }}
        >
          Slide 8
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-9.jpg)"
          }}
        >
          Slide 9
        </SwiperSlide>
        <SwiperSlide
          style={{
            backgroundImage:
              "url(https://swiperjs.com/demos/images/nature-10.jpg)"
          }}
        >
          Slide 10
        </SwiperSlide>
      </Swiper>
    </div>
  

    <div className="  mt-16 sm:mt-20 ">
      <div className="mx-auto">
      <img src="assets/images/phone.png" alt=""/>
      </div>
  
  <div className="mx-auto sub-info relative">
    <img src="assets/images/whiteLine.svg" className="left-0 absolute" alt=""/>

    <div className="border-right">
      <h1 className="text-[#6BFF83] font-monument font[400] text-3xl">2650</h1>
      <p className="text-[#fff] font-red-hat font-[500] text-xl mt-6">Beta testers</p>

    </div>

    <div className="border-right">
      <h1 className="text-[#6BFF83] font-monument font[400] text-3xl" >2650</h1>
      <p className="text-[#fff] font-red-hat font-[500] text-xl mt-6">Beta testers</p>

    </div>

    <div>
      <h1 className="text-[#6BFF83] font-monument font[400] text-3xl">2650</h1>
      <p className="text-[#fff] font-red-hat font-[500] text-xl mt-6">Beta testers</p>

    </div>
    <img src="assets/images/whiteLine.svg" alt="" className="right-0 absolute"/>
  </div>
    </div>
      </>
  );
};

export default Mission;
