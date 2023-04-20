import React from "react";

const TeamCard = ({ className }) => {
  return (
    <div
      className={`flex border-[#fff] border-opacity-[0.33] pl-5 pt-5  ${className}`}
    >
        
      <div>
        <div className="flex items-center mb-4 mx-auto">
          <div className="h-12 w-12 mr-3 rounded-full bg-gray-600"></div>
          <p className="font-bold font-red-hat text-white">Lukę Skywalker</p>
        </div>
        <p className="text-[#9AA0A6] text-base font-red-hat mx-auto">
          From wielding a lightsaber to trading cryptocurrencies, Lukę's Force
          is strong in the crypto world.
        </p>
      </div>
      <img src="/assets/images/team-line.svg" className="h-full w-auto ml-8" />
    </div>
  );
};

export default TeamCard;
