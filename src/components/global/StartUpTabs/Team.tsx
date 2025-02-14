import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  designation: string;
  linkedinUrl: string;
}

interface TeamData {
  members: TeamMember[];
  howFundingTeamKnowsEachOther: string;
  whyDidYouCreateThisStartup: string;
  foundersWorkingOnFullTime: boolean;
}

const Team = ({ data }: { data?: TeamData }) => {
  return (
    <div className="p-5 flex flex-col items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-y-7 ">
      <p className="text-[#000] text-[25px] font-urbanist-regular_400 leading-[110%]">
        Team Members
      </p>

      {data?.members?.map((member, index) => (
        <TeamCard key={index} member={member} />
      )) || <p>No team members found</p>}

      <div className="w-full flex flex-col gap-y-4">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          How does the founding team know each other?
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
          {data?.howFundingTeamKnowsEachOther || 'N/A'}
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-4">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Why did you create this startup?
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
          {data?.whyDidYouCreateThisStartup || 'N/A'}
        </p>
      </div>

      <div className="w-full flex flex-col gap-y-4">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Are all founders working full time?
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
          {data?.foundersWorkingOnFullTime ? 'Yes' : 'No'}
        </p>
      </div>
    </div>
  );
};

const TeamCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="w-full p-3 flex flex-row items-start justify-between bg-[#D9D9E4] rounded-[12px] border-[1px] border-solid border-[#D1D1E2]">
      <div className="flex flex-row items-start justify-normal gap-x-5">
        <div className="w-[61px] aspect-square rounded-full bg-pink-500 relative overflow-hidden">
          <Image
            src="/images/Profile1.png"
            alt="Profile Image"
            className="object-cover"
            fill
          />
        </div>
        <div className="flex flex-col items-start gap-3 justify-between">
          <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">
            {member.name}
          </p>
          <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">
            {member.designation}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-start justify-between gap-3">
        <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">
          {member.linkedinUrl}
        </p>
        <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-[110%]">
          {member.designation}
        </p>
      </div>
    </div>
  );
};

export default Team;
