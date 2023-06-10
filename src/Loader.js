import React from "react";


function Loader() {
  return (
    <div className="flex items-center justify-center bg-black h-[100vh]">
     

      <video playsInline loop autoPlay muted className="w-[15vw] h-auto" src='assets/loader.mp4' type="video/mp4" />

     
    </div>
  );
}

export default Loader;
