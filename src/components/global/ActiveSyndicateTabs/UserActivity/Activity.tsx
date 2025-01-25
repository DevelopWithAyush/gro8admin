import { cn } from "@/lib/utils";
import React from "react";

const Activity = ({ active }: { active?: string }) => {
  console.log(active);
  return (
    <div className="w-full">
      <Post />
    </div>
  );
};

export default Activity;

const Post = () => {
  return (
    <div className="w-full flex flex-col items-start justify-normal py-10 px-[35.33px] border border-solid border-[#E8E8F1] rounded-[12px] gap-y-[30px] ">
      <div className="flex flex-row items-center justify-start gap-2 ">
        <div className="w-[50px] aspect-square rounded-full bg-blue-300 "></div>
        <div className="flex flex-col items-start justify-start gap-[5px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <p className="text-[#000] font-urbanist-semibold_600 text-[14px] leading-[110%] ">
              Red Sun Mountain
            </p>
            <p className={cn("px-1 py-[1px] rounded-[8px] bg-[#5D8B23] text-[8px] text-[#FFF] ")}>
              Syndicate
            </p>
          </div>
          <p className="text-[#7D7D88] font-rubik-regular_400 leading-[110%] text-[12px]">
            1 day ago
          </p>
        </div>
      </div>
      <div className="pl-[57.4px] clear-start w-full flex flex-col items-start justify-start gap-4">
        <p className="text-[#000] font-urbanist-regular_400 text-[20px] leading-normal">
          Virtual Pitch day
        </p>
        <div className="flex flex-row items-center justify-start ">
          <div className="pr-[23.29px]">
            <p className="text-[#838D96] text-[12px] font-rubik-light_300 leading-[110%]">
              Time
            </p>
            <p className="text-[#383838] text-[14px] font-rubik-regular_400 leading-[110%]">
              3:00PM-4:00PM IST
            </p>
          </div>
          <div className="border-l-[1px] pl-[23.29px] border-solid border-[#D1D1E2]">
            <p className="text-[#838D96] text-[12px] font-rubik-light_300 leading-[110%]">
              Date
            </p>
            <p className="text-[#383838] text-[14px] font-rubik-regular_400 leading-[110%]">
              Wednesday, July 31, 2024
            </p>
          </div>
        </div>
        <p className="text-[12px] text-[#383838] font-rubik-regular_400 leading-[110%]">
          Lorem ipsum dolor sit amet consectetur. Ullamcorper aliquam lacinia
          sit parturient facilisis nisl. A elementum et proin tortor congue a ac
          sed nunc. Cum dis pellentesque molestie varius non sed. Nunc duis
          dolor convallis augue egestas tempus quis euismod. Sed augue bibendum
          massa faucibus enim adipiscing. Amet urna quis sed nunc turpis sed.
          Massa mi ut amet cum vulputate orci. Semper
        </p>
        <div className="w-full h-[358px] bg-orange-200 rounded-[4px]"></div>
      </div>
    </div>
  );
};
