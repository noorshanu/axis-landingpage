import React, { useState } from "react";

const AxisNFTs = () => {
  let nfts = [
    "",
    "/assets/images/nft3.svg",
    "/assets/images/nft2.svg",
    "/assets/images/nft1.svg",
  ];
  let [activeNft, setActiveNft] = useState(2);
  return (
    <div className=" mt-20">
      <div className="text-center mx-auto max-w-[400px] text-2xl text-[#ACFFB9] font-monument">
        Get Your Hands on Axis NFTs
      </div>
      <div className="py-20 overflow-hidden flex items-center justify-around">
        <img
          src={nfts[activeNft==1 ?2 : activeNft - 1]}
          className="h-auto md:h-[230px] w-auto hidden sm:flex"
        />
        <div className="flex justify-between items-center text-white font-red-hat">
          <button
            className="cursor-pointer border-none outline-none"
            onClick={() => setActiveNft((e) => (e == 1 ? 3 : e - 1))}
          >
            {" "}
            {"<"}
          </button>
          <img src={nfts[activeNft]} className="h-[230px] w-auto mx-3 sm:mx-12" />
          <button
            className="cursor-pointer border-none outline-none"
            onClick={() => setActiveNft((e) => (e == 3 ? 1 : e + 1))}
          >
            {" "}
            {">"}
          </button>
        </div>
        <img
          src={nfts[activeNft == 3 ? 1 : activeNft + 1]}
          className="h-auto md:h-[230px] w-auto hidden sm:flex"
        />
      </div>
    </div>
  );
};

export default AxisNFTs;
