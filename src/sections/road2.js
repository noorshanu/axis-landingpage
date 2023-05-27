import React, { useRef, useState } from "react";
import RoadmapCard2 from "../components/RoadmapCard2";
import { useEffect } from "react";
import useIsInViewport from "../hooks/useIsInViewPort";

const Road = () => {
  let [showAnimation, setShowAnimation] = useState(false);
  let ref = useRef();
  let animation = useIsInViewport(ref);
  useEffect(() => {
    if (animation) setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 6150);
  }, [animation]);
  return (
    <div className="relative" ref={ref}>
      <h1 className=" mt-32 mb-12 font-monument text-[#6BFF83] text-2xl font-bold sm:text-3xl text-center mx-auto">
        Roadmap
      </h1>
      <video
        autoPlay
        
        muted
        id="about_video2"
        className={`w-full h-auto ${showAnimation ? "hidden sm:flex" : "hidden"}`}
      >
        <source src="assets/fox/frameAnm.mp4" />
      </video>
      <div
        className={`relative mx-10 sm:bg-[url('../public/assets/images/RoadmapFrame.svg')] bg-[url('../public/assets/images/roadmap-sm-bg.svg')]  bg-cover `}
      >
        <img
          src="/assets/images/RoadmapFrame.svg"
          className={`w-full h-auto invisible ${showAnimation ? "hidden" : "sm:flex hidden"}`}
        />
        <img
          src="/assets/images/roadmap-sm-bg.svg"
          className={`w-full h-auto px-5 flex sm:hidden invisible`}
        />
        <div className={` inset-0 transition-opacity hidden sm:flex absolute duration-500 ${ showAnimation ? "opacity-0" : "opacity-100"}`}>
          <RoadmapCard2
            top={"21%"}
            left={"3%"}
            maxw={"12%"}
            h1={"Q3"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"21%"}
            left={"33%"}
            maxw={"12%"}
            h1={"Q1"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"9%"}
            left={"64.5%"}
            maxw={"14%"}
            h1={"Q3"}
            fontSize={"1vw"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"62%"}
            left={"17%"}
            maxw={"12%"}
            h1={"Q4"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"62%"}
            left={"51%"}
            maxw={"12%"}
            h1={"Q2"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
          <RoadmapCard2
            top={"62%"}
            left={"83%"}
            maxw={"12%"}
            h1={"Q4"}
            p1={"Launching Axis Finance"}
            p2={"Lining up first partnerships with Arbitrum protocols"}
            p3={
              "Reaching $2M-$5M TVL in a couple weeks after the platform launch"
            }
          />
        </div>
        <div className="hidden top-[21%] top-[9%] top-[62%] max-w-[12%] max-w-[14%] text-[1vw] text-[14px] text-[0.75vw] left-[3%] left-[33%] left-[17%] left-[64.5%] left-[51%] left-[83%]" />
      </div>
      {/* <div className="sm:flex relative text-center hidden ">
        <img src="assets/images/roadmap-line.svg" alt="" />

        <div className="box_1 absolute overflow-x-hidden sm:overflow-x-visible left-[-64px] top-[126px]">
          <div className="relative">
            <img src="assets/images/roadmap-frame.svg" alt=""  className="h-[230px]"/>

            <div className="roadmap-content absolute overflow-x-hidden sm:overflow-x-visible">
              <h1 className="text-white font-organetto font-semibold text-3xl">Q3</h1>

              <p className="text-white font-red-hat text-[12px] font-normal">Launching Axis Finance</p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Lining up first partnerships with Arbitrum protocols
              </p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Reaching $2M-$5M TVL in a couple weeks after the platform launch
              </p>
            </div>
          </div>
        </div>


        <div className="box_2 absolute overflow-x-hidden sm:overflow-x-visible left-[123px] top-[24.5rem]">
          <div className="relative">
            <img src="assets/images/roadmap-frame.svg" alt=""  className="h-[230px]"/>

            <div className="roadmap-content absolute overflow-x-hidden sm:overflow-x-visible">
              <h1 className="text-white font-organett font-semibold text-3xl">Q4</h1>

              <p className="text-white font-red-hat text-[12px] font-normal">Launching Axis Finance</p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Lining up first partnerships with Arbitrum protocols
              </p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Reaching $2M-$5M TVL in a couple weeks after the platform launch
              </p>
            </div>
          </div>
        </div>


        <div className="box_3 absolute overflow-x-hidden sm:overflow-x-visible left-[21.6em] top-[8em]">
          <div className="relative">
            <img src="assets/images/roadmap-frame.svg" alt=""  className="h-[230px]"/>

            <div className="roadmap-content absolute overflow-x-hidden sm:overflow-x-visible">
              <h1 className="text-white font-organetto font-semibold text-3xl">Q1</h1>

              <p className="text-white font-red-hat text-[12px] font-normal">Launching Axis Finance</p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Lining up first partnerships with Arbitrum protocols
              </p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Reaching $2M-$5M TVL in a couple weeks after the platform launch
              </p>
            </div>
          </div>
        </div>




        <div className="box_4 absolute overflow-x-hidden sm:overflow-x-visible left-[50.4em] top-[3em]">
          <div className="relative">
            <img src="assets/images/roadmap-frame.svg" alt=""  className="h-[230px]"/>

            <div className="roadmap-content absolute overflow-x-hidden sm:overflow-x-visible">
              <h1 className="text-white font-organetto font-semibold text-3xl">Q3</h1>

              <p className="text-white font-red-hat text-[12px] font-normal">Launching Axis Finance</p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Lining up first partnerships with Arbitrum protocols
              </p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Reaching $2M-$5M TVL in a couple weeks after the platform launch
              </p>
            </div>
          </div>
        </div>



        <div className="box_5 absolute overflow-x-hidden sm:overflow-x-visible left-[37.3em] top-[24.5em]">
          <div className="relative">
            <img src="assets/images/roadmap-frame.svg" alt=""  className="h-[230px]"/>

            <div className="roadmap-content absolute overflow-x-hidden sm:overflow-x-visible">
              <h1 className="text-white font-organetto font-semibold text-3xl">Q2</h1>

              <p className="text-white font-red-hat text-[12px] font-normal">Launching Axis Finance</p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Lining up first partnerships with Arbitrum protocols
              </p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Reaching $2M-$5M TVL in a couple weeks after the platform launch
              </p>
            </div>
          </div>
        </div>


      




      </div>
      <div className="box_6 absolute overflow-x-hidden  h-[230px]  left-[76.3em] top-[234.5em]">
          <div className="relative">
            <img src="assets/images/roadmap-frame.svg" alt=""  className="h-[230px]"/>

            <div className="roadmap-content absolute overflow-x-hidden sm:overflow-x-visible text-center">
              <h1 className="text-white font-organett font-semibold text-3xl ">Q4</h1>

              <p className="text-white font-red-hat text-[12px] font-normal">Launching Axis Finance</p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Lining up first partnerships with Arbitrum protocols
              </p>
              <p className="text-white font-red-hat text-[12px] font-normal">
                Reaching $2M-$5M TVL in a couple weeks after the platform launch
              </p>
            </div>
          </div>
        </div>
      <div className="sm:hidden relative text-center flex">
        <img
          src="assets/images/roadmap-mob.svg"
          alt=""
          className="ml-[-46px]"
        />
      </div>
      <img
            src="assets/images/whiteLine.svg"
            alt=""
            className="right-[-14rem] top-[-14rem]  h-[500px] absolute hidden sm:block"
          />

        <img src="assets/icons/blur.png" className="top-[8em] left-[-9em] absolute  hidden sm:block" alt=""/>
        
        <img src="assets/icons/road-side.png" className="top-[33em] left-[-9.7em] absolute hidden sm:block" alt=""/>
         */}
    </div>
  );
};

export default Road;
