import React, { useEffect, useRef, useState } from "react";
import useIsInViewport from "./hooks/useIsInViewPort";

const Newalater = () => {
  const ref = useRef();
  let isInViewPort = useIsInViewport(ref);
  let [showAnimation, setShowAnimation] = useState(false);
  let [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    if (isInViewPort) {
      setShowAnimation(true);
      setPlayAnimation(true)
      setTimeout(() => {
        setShowAnimation(false);
      }, 500);
    }
  }, [(isInViewPort && !playAnimation)]);

  return (
    <div className="mx-auto py-12  max-w-7xl px-4 sm:px-12 ">
      <div className=" font-monument wishlist flex items-center m-auto font-normal text-xl justify-center gap-2 text-white  w-full h-[260px] sm:h-[180px] my-12 rounded-lg cursor-pointer bg-cover">
        <span className={`${showAnimation ? "slide-left" : ""}`} ref={ref}>
          Become a BETA tester now
        </span>{" "}
        <form className={`sub-form ${showAnimation ? "slide-right" : ""}`}>
          {" "}
          <input
            type="email"
            placeholder="Email Address"
            className="input-sub text-base px-6 py-5 "
          />{" "}
          <a
            href="/"
            className="py-5 bg-black rounded-[64px] px-4 font-[300] text-[18px]"
          >
            Try Now
          </a>
        </form>
      </div>

      {/* <Services /> */}
    </div>
  );
};

export default Newalater;
