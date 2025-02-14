import React from "react";
import DetailCard from "./DetailCard";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface KPIData {
  businessUpdates: string;
  revenueFile: {
    imageUri: string;
  };
  kpiIndicator: {
    imageUri: string;
  };
}

const KPI = ({ data }: { data?: KPIData }) => {
  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-8 ">
      <DetailCard
        colSpan2={true}
        title="Business Update"
        description={data?.businessUpdates || 'N/A'}
      />

      <div className={cn(" col-span-1 w-full flex flex-col items-start justify-start gap-1")}>
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Revenue Indicator file
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
          {data?.revenueFile?.imageUri ? (
            <>
              Revenue Indicator <ExternalLink className="w-[16px] text-[#0061FE]" />
            </>
          ) : (
            'N/A'
          )}
        </p>
      </div>

      <div className={cn(" col-span-1 w-full flex flex-col items-start justify-start gap-1")}>
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          KPI Indicator File
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
          {data?.kpiIndicator?.imageUri ? (
            <>
              KPI Indicator <ExternalLink className="w-[16px] text-[#0061FE]" />
            </>
          ) : (
            'N/A'
          )}
        </p>
      </div>
    </div>
  );
};

export default KPI;
