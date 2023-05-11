import React from "react";

const About = () => {
  return (
<section className="aboutUs relative">
  <img src="assets/icons/side1.svg" alt="" className="side1"/>
  <img src="assets/icons/side2.svg" alt="" className="side2"/>

  <div className=" text-center mt-32">
    <video autoPlay loop muted id="about_video">
      <source src="assets/icons/about.webm"/>
    </video>
  {/* <img src="assets/icons/hero.png" alt="" className="mid m-auto"/> */}

  </div>

</section>
  );
};

export default About;
