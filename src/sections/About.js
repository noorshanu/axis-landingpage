import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

const About = () => {
  return (
    <section className="aboutUs relative">
      <img src="assets/images/slide1.svg" alt="" className="side1" />
      <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div>
            {" "}
            <span className="text-black">a</span>
            {isVisible ?  <img src="assets/fox/pattern.gif" alt="" className=" absolute right-[-35px] top-8 sm:top-[90px] w-[25vw] h-auto  rotate-180" /> : <img src="assets/images/slide2.svg" alt="" className="side2 w-[17vw] h-auto" />}
          </div>
        )}
      </ReactVisibilitySensor>

      <div className=" text-center pt-48 z-40 relative mt-8 backdrop:blur-lg bg-black bg-opacity-20">
        <video autoPlay loop muted playsInline id="about_video2" className=" invisible">
          <source src="assets/about.webm"  type="video/webm"/>
        </video>
        <video autoPlay loop muted playsInline id="about_video2" className=" absolute sm:w-[90%] w-[100%] lg:w-[50%] z-50 h-auto inset-[0px]">
          <source src="assets/about.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};

export default About;
