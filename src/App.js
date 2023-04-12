import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <div className="bg-[#000] min-h-screen">
      <div className="sm:bg-[url('/public/assets/images/hero-bg.png')] bg-[url('/public/assets/images/hero-bg-sm.png')] h-fit  sm:bg-[length:75%_100%] bg-[length:100vw_100vh] bg-no-repeat sm:bg-right-top bg-bottom">
        <div className="mx-auto  max-w-7xl px-12 ">
          <Navbar />
          <Hero />
        </div>
        <div className="mx-auto  max-w-7xl px-12 ">
          {/* other sections  */}
        </div>
      </div>
    </div>
  );
}

export default App;
