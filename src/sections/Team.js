import React from "react";
// import TeamCard from "../components/TeamCard";

// let teams = [];
const Team = () => {
  return (
    <div className="mb-24" >
      <div className="mt-24 ">
        <div className=" col-span-2  py-2 ">
          <h1 className="capitalize text-4xl mb-3 text-[#6BFF83] font-monument text-center">
            our team
          </h1>
      
        </div>
        
       
      </div>
      {/* <div className="grid sm:grid-cols-2 grid-cols-1  md:grid-cols-4 gap-7 mt-7">
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t"} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t border-l-0 "} />
        <TeamCard className={"border-t"} />
      </div> */}

      <div className="m-auto text-center">
        <img src="assets/images/team.png" alt="" className="m-auto"/>

      </div>
    </div>
  );
};

export default Team;
