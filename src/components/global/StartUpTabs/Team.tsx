import Image from "next/image";
import React from "react";

const Team = () => {
  return (
      <div className="p-5 flex flex-col  items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-y-7 ">
          <p className="text-[#000] text-[25px] font-urbanist-regular_400 leading-[110%]">Team Members</p>
  
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
          <TeamCard/>
              
    
    </div>
  );
};

export default Team;

const TeamCard = () => {
  return (
      <div className="w-full p-3 flex flex-row items-start justify-between bg-[#D9D9E4] rounded-[12px] border-[1px] border-solid border-[#D1D1E2]">
      <div className="flex flex-row items-start justify-normal gap-x-5">
              <div className="w-[61px] aspect-square rounded-full bg-pink-500 relative overflow-hidden">
                  <Image
                      src="/images/Profile1.png" // Replace with your image URL
                      alt="Profile Image"
                      className="object-cover"
                      fill
                  />
        </div>
        <div className="flex flex-col items-start gap-3 justify-between">
          <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">Bham Subramaniam</p>
          <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">CFO</p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-3">
        <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">Linkedin.com/bhamsubraman</p>
        <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">CFO</p>
      </div>
    </div>
  );
};
