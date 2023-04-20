import React from "react";
import TeamCard from "../components/TeamCard";

let teams = [];
const Team = () => {
  return (
    <div>
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className=" col-span-2  py-5 ">
          <h1 className="capitalize text-4xl mb-3 text-[#11FF37] font-monument">
            our team
          </h1>
          <p className="text-[#9AA0A6] text-lg font-red-hat">
            Dozens of experienced individuals are working on the success of
            Axis. Meet them all!
          </p>
        </div>
        <TeamCard />
        <TeamCard />
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1  md:grid-cols-4 gap-7 mt-7">
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t"} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t"} />
      </div>
    </div>
  );
};

export default Team;
