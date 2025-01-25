import { ExternalLink } from "lucide-react";
import React from "react";

const UserProfile = () => {
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
            01/02/2024
          </p>
        </div>
        <div className="flex flex-col items-start justify-normal gap-1">
          <p className="text-[#696971] text-[12px] font-rubik-light_300 leading-normal">
            Country Of Origin
          </p>
          <p className="text-[#000] text-[16px] font-rubik-regular_400 leading-5">
            India
          </p>
        </div>
        <div className="flex flex-col items-start justify-normal gap-1">
          <p className="text-[#696971] text-[12px] font-rubik-light_300 leading-normal">
            LinkedIN Account
          </p>
          <p className="text-[#000] text-[16px] font-rubik-regular_400 leading-5  underline flex items-center gap-1">
            https://www.888vc.co{" "}
            <ExternalLink className="w-[16px] text-[#0061FE]" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
