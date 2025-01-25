import React from "react";
import DetailCard from "./DetailCard";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const KPI = () => {
  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-8 ">
      <DetailCard
        colSpan2={true}
        title="Business Update"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />

          <div
              className={cn(
                  " col-span-1 w-full flex flex-col items-start justify-start gap-1"
              )}
          >
              <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
                  Revenue Indicator file
              </p>
              <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
                  revenueindicator.pdf
                  <ExternalLink className="w-[16px] text-[#0061FE]" />
              </p>
          </div>
          <div
              className={cn(
                  " col-span-1 w-full flex flex-col items-start justify-start gap-1"
              )}
          >
              <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
                  KPI Indicator File
              </p>
              <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
                  KPI Indicator.pdf
                  <ExternalLink className="w-[16px] text-[#0061FE]" />
              </p>
          </div>
    </div>
  );
};

export default KPI;
