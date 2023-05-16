import React from "react";

const About = () => {
  return (
<section className="aboutUs relative">
  <img src="assets/icons/side1.svg" alt="" className="side1"/>
  <img src="assets/icons/side2.svg" alt="" className="side2"/>

  <div className=" text-center pt-48">
    <video autoPlay loop muted id="about_video2">
      <source src="assets/icons/about.webm"/>
    </video>


  </div>

</section>
  );
};

export default About;
