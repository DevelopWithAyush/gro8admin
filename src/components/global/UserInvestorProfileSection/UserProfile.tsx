import { ExternalLink } from "lucide-react";
import React from "react";
import { format } from "date-fns";

export interface UserProfileData {
  createdAt: string;
  role: string;
  profile: {
    investorProfile: {
      country: string;
      industryPreferences: number[];
      investorKyc: {
        firstName: string;
        lastName: string;
      };
    };
  };
}

const UserProfile = ({ data }: { data: UserProfileData }) => {
  return (
    <div className="p-5 flex flex-col items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-[12px] ">
      <p className="text-[#26252F] text-[26px] font-urbanist-regular_400 leading-normal">
        User Profile
      </p>
      <div className=" flex flex-row items-center justify-between w-full">
        <div className="flex flex-col items-start justify-normal gap-1">
          <p className="text-[#696971] text-[12px] font-rubik-light_300 leading-normal">
            Registration
          </p>
          <p className="text-[#000] text-[16px] font-rubik-regular_400 leading-5">
            {format(new Date(data.createdAt), 'dd/MM/yyyy')}
          </p>
        </div>
        <div className="flex flex-col items-start justify-normal gap-1">
          <p className="text-[#696971] text-[12px] font-rubik-light_300 leading-normal">
            Country Of Origin
          </p>
          <p className="text-[#000] text-[16px] font-rubik-regular_400 leading-5">
            {data.profile.investorProfile.country}
          </p>
        </div>
        <div className="flex flex-col items-start justify-normal gap-1">
          <p className="text-[#696971] text-[12px] font-rubik-light_300 leading-normal">
            LinkedIN Account
          </p>
          <p className="text-[#000] text-[16px] font-rubik-regular_400 leading-5 underline flex items-center gap-1">
            View Profile <ExternalLink className="w-[16px] text-[#0061FE]" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
