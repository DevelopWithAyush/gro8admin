import { ExternalLink } from "lucide-react";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-7 p-5   border-[1px] border-solid border-[#E8E8F1]  bg-[#FFF] rounded-[12px] gap-[15px]">
      <div className="col-span-1 flex flex-col  ">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          LinkedIN Account Link
        </p>
        <p className="text-[#0061FE] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          Linkedin.com/u/Testling{" "}
          <ExternalLink className="w-[14px] text-[#0061FE]" />{" "}
        </p>
      </div>
      <div className="col-span-1 flex flex-col  ">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Country
        </p>
        <p className="text-[#151517] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          Name
        </p>
      </div>
      <div className="col-span-1 flex flex-col  ">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          State
        </p>
        <p className="text-[#151517] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          url
        </p>
      </div>
      <div className="col-span-1 flex flex-col  ">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          City
        </p>
        <p className="text-[#151517] text-[14px] flex flex-row items-center gap-[10px] leading-[110%]">
          MM / YYYY
        </p>
      </div>
      <div className="col-span-2 flex flex-col gap-1">
        <p>Industry Preference</p>
        <div className="flex flex-row gap-x-2">
          {Array.from({ length: 7 }).map((_, index) => {
            return (
              <p
                key={index} /* Always add a unique key when rendering lists */
                className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF]"
              >
                Industry Type {index + 1} {/* Add dynamic text if necessary */}
              </p>
            );
          })}
        </div>
      </div>

      <div className="col-span-2 flex flex-col gap-1">
        <p className=" text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%] ">
          What Countries is the user filing tax returns in
        </p>
        <p className=" text-[#151517] text-[16px] font-rubik-regular_400 leading-[110%] ">
          India, United Kingdom
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
