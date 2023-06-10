import Team from "./sections/Team";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Roadmap from "./sections/Roadmap";
import Footer from "./sections/Footer";
import Road from "./sections/road2";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Newalater from "./Newalater";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    AOS.init();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="bg-[#000] h-max w-screen overflow-x-hidden">
          <div
            className="main-bg relative sm:bg-[url('/public/assets/images/main-bg.svg')] w-full h-full sm:max-h-[800px]  sm:h-[100vh] bg-[length:100vw_100vh] bg-no-repeat "
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="overlays"></div>
            <video  id="about_video"  autoPlay loop muted playsInline={true} controls={false} src="assets/hero.mp4" type="video/mp4">
            {/* <source src="assets/hero.webm" type="video/webm" /> */}
            
              Your browser does not support the video tag.
            </video>
            <div className="mx-auto  max-w-7xl px-4 sm:px-12 absolute top-3 left-0 right-0  ">
              <Navbar />
              <Hero />
            </div>
          </div>
          <About />
          {/* <div className="  max-w-7xl  px-4 sm:px-2 m-auto "> */}
          <Mission />
          {/* </div> */}

          <Newalater />
          <Roadmap />
          <div className=" mt-12 py-3 px-3 w-full">
            <img
              src="/assets/images/line.svg"
              className="w-full h-auto  sm:hidden flex "
              alt=""
            />
          </div>

          <div className="relative">
            <img
              src="/assets/images/RoadEffect.svg"
              className="w-[50vw] z-50 h-auto absolute bottom-[-10rem] left-0"
            />
            <img
              src="/assets/images/Roadmap-white-bg-effect.svg"
              className="w-[35vw] z-50 h-auto absolute top-[-20rem] right-0"
            />

            <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
              {/* <Market/> */}
              {/* <AxisNFTs/>
        <MobileApp/> */}
              <Road />
            </div>
          </div>
          <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
            {/* <Path/> */}
            <Team />
          </div>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
