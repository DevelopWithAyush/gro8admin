// import { ExternalLink } from "lucide-react";
import React from "react";

interface MentorProfile {
  country: string;
  state: string;
  city: string;
  gender: string;
  industryPreferences: number[];
  expertise: {
    startups: Array<{
      name: string;
      url: string;
      details: string;
    }>;
  };
}

const ProfileSection = ({ data }: { data: MentorProfile }) => {
  const profile = data;

  return (
    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-7">
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Country
        </p>
        <p className="text-[#151517] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          {profile.country}
        </p>
      </div>
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          State
        </p>
        <p className="text-[#151517] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          {profile.state}
        </p>
      </div>
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          City
        </p>
        <p className="text-[#151517] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          {profile.city}
        </p>
      </div>

      <div className="col-span-2 flex flex-col gap-1">
        <p>Industry Preference</p>
        <div className="flex flex-row gap-x-2">
          {profile?.industryPreferences?.map((industry, index) => (
            <p
              key={index}
              className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF]"
            >
              Industry Type {industry}
            </p>
          ))}
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-1">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Expertise
        </p>
        {profile.expertise.startups.map((startup, index) => (
          <div key={index} className="flex flex-col gap-1">
            <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-[110%]">
              {startup.name}
            </p>
            <a href={startup.url} target="_blank" rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800">
              {startup.url}
            </a>
            <p className="text-[#151517] text-[14px]">{startup.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSection;
