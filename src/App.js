import Navbar from "./components/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Roadmap from "./sections/Roadmap";

function App() {
  return (
    <div className="bg-[#000] min-h-screen">
      <div className="sm:bg-[url('/public/assets/images/hero-bg.png')] bg-[url('/public/assets/images/hero-bg-sm.png')] h-fit  sm:bg-[length:75%_100%] bg-[length:100vw_100vh] bg-no-repeat sm:bg-right-top bg-bottom">
        <div className="mx-auto  max-w-7xl px-8 sm:px-12 ">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="mx-auto  max-w-7xl px-8 sm:px-12 ">
        <About />
        <Mission />
      </div>
      <div className="mx-auto  max-w-7xl px-8 sm:px-12 ">
        <Roadmap />
      </div>
    </div>
  );
}

export default App;
