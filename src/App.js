// import Services from "./sections/Services";
import Team from "./sections/Team";
import Navbar from "./components/Navbar";
import About from "./sections/About";
// import AxisNFTs from "./sections/AxisNFTs";
import Hero from "./sections/Hero";
// import Market from "./sections/Market";
import Mission from "./sections/Mission";
// import MobileApp from "./sections/MobileApp";
import Path from "./sections/Path";
import Roadmap from "./sections/Roadmap";

import Footer from "./sections/Footer";

function App() {
  return (
    <div className="bg-[#000] h-max">
      <div className="main-bg sm:bg-[url('/public/assets/images/main-bg.svg')] bg-[url('/public/assets/images/hero-bg-sm.png')] h-[800px] sm:h-[732px]  bg-[length:100vw_100vh] bg-no-repeat ">
        <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
          <Navbar />
          <Hero />
        </div>
      </div>
      <About />
      <div className="mx-auto  max-w-7xl  px-4 sm:px-12 ">
      
        <Mission /> 
      </div>

      <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
        <button className="font-monument font-normal text-2xl text-white bg-[url('/public/assets/images/button.svg')] w-full h-[180px] my-12 rounded-lg cursor-pointer bg-cover">
        Become a BETA tester now
        </button>
        <Roadmap />
        {/* <Services /> */}

        {/* <div className=" pt-24 w-full sm:flex flex-col hidden ">
          <img src="/assets/images/line.svg" className="w-full h-auto"  alt=""/>
          <img src="/assets/images/line.svg" className="w-full h-auto mt-4" alt="" />
        </div> */}
      </div>
      <div className=" mt-12 py-3 px-3 w-full">
        <img src="/assets/images/line.svg" className="w-full h-auto  sm:hidden flex " alt="" />
      </div>

      <div className="mx-auto  max-w-7xl px-4 sm:px-12 ">
        {/* <Market/> */}
        {/* <AxisNFTs/>
        <MobileApp/> */}
        <Path/>
        <Team/>
      </div>
      
        <Footer/>

    </div>
  );
}

export default App;
