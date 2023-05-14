// import Services from "./sections/Services";
import Team from "./sections/Team";
import Navbar from "./components/Navbar";
import About from "./sections/About";
// import AxisNFTs from "./sections/AxisNFTs";
import Hero from "./sections/Hero";
// import Market from "./sections/Market";
import Mission from "./sections/Mission";
// import MobileApp from "./sections/MobileApp";
// import Path from "./sections/Path";
import Roadmap from "./sections/Roadmap";

import Footer from "./sections/Footer";
import Road from "./sections/road2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from "react";
import Loader from "./Loader";

function App() {
  const [loading,setLoading] =useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])
  useEffect(() => {
    AOS.init();
  }, [])
  return (
   <>
     {
      loading ?
      <Loader/>
      :
   
    <div className="bg-[#000] h-max">
      <div className="main-bg relative sm:bg-[url('/public/assets/images/main-bg.svg')]  h-[656px] sm:h-[732px]  bg-[length:100vw_100vh] bg-no-repeat " data-aos="fade-down" data-aos-easing="linear"
     data-aos-duration="1000">
      <div className="overlays">

      </div>
     <video autoPlay loop muted id="about_video">
      <source src="assets/hero.mp4"/>
    </video>
        <div className="mx-auto  max-w-7xl px-4 sm:px-12 absolute top-3 left-0 right-0  ">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <div className="mx-auto  max-w-7xl  px-4 sm:px-2 ">
      
        <Mission /> 
      </div>

      <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
        <button className="font-monument font-normal text-2xl text-white bg-[url('/public/assets/images/button.svg')] w-full h-[180px] my-12 rounded-lg cursor-pointer bg-cover">
        Become a BETA tester now <form> <input type="email" placeholder="Email Addressm" className=""/> <a href="/" >Try Now</a></form>
        </button>
       
        {/* <Services /> */}

 
      </div>
      <Roadmap />
      <div className=" mt-12 py-3 px-3 w-full">
        <img src="/assets/images/line.svg" className="w-full h-auto  sm:hidden flex " alt="" />
      </div>

      <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
        {/* <Market/> */}
        {/* <AxisNFTs/>
        <MobileApp/> */}
        <Road/>
        {/* <Path/> */}
        <Team/>
      </div>
      
        <Footer/>

    </div>
     
      }
      </>
  );
}

export default App;
