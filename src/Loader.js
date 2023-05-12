import React from "react";


function Loader() {
  return (
    <div className="flex items-center justify-center bg-black h-[100vh]">
     

      <video playsInline loop autoPlay muted src='assets/loader.webm' />

     
    </div>
  );
}

export default Loader;
