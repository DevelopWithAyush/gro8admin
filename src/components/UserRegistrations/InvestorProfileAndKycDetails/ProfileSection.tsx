// import { ExternalLink } from "lucide-react";
import React from "react";

export interface InvestorProfile {
  country: string;
  state: string;
  city: string;
  industryPreferences: number[];
  countriesFilingTaxReturnsIn: string;
}

export interface ProfileData {
  profile: {
    investorProfile: InvestorProfile;
  };
}

const ProfileSection = ({ data }: { data: ProfileData }) => {
  const profile = data.profile.investorProfile;

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
          {profile.industryPreferences.map((industry, index) => (
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
          What Countries is the user filing tax returns in
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-[110%]">
          {profile.countriesFilingTaxReturnsIn}
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
