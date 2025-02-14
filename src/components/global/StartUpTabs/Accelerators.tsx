import { cn } from "@/lib/utils";
import React from "react";
import DetailCard from "./DetailCard";

interface AcceleratorData {
  partOfExistingAcceleratorProgram: boolean;
  acceleratorName: string;
  acceleratorType: string;
  mentorName: string;
  mentorLinkedinUrl: string;
  equityGivenToMentor: number;
  equityGivenToMentorCurrency: string;
  equityGivenToAccelerator: number;
  equityGivenToAcceleratorCurrency: string;
}

const Accelerators = ({ data }: { data?: AcceleratorData }) => {
  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-8 ">
      <div
        className={cn(
          " col-span-2 w-full flex flex-col items-start justify-start gap-1"
        )}
      >
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Is the startup part of any existing accelerator program?
        </p>
        <div className="flex flex-row gap-x-2">
          <p className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap">
            {data?.partOfExistingAcceleratorProgram ? 'Startup is part of accelerator' : 'Not part of accelerator'}
          </p>
        </div>
      </div>
      <DetailCard
        title="Accelerator Name"
        description={data?.acceleratorName || 'N/A'}
      />
      <DetailCard
        title="Accelerator Type"
        description={data?.acceleratorType || 'N/A'}
      />
      <DetailCard
        title="Mentor Name"
        description={data?.mentorName || 'N/A'}
      />
      <DetailCard
        title="Mentor LinkedIN URL"
        description={data?.mentorLinkedinUrl || 'N/A'}
      />
      <DetailCard
        title="Equity given to mentor"
        description={data?.equityGivenToMentor ?
          `${data.equityGivenToMentor}% ${data.equityGivenToMentorCurrency}` : 'N/A'}
      />
      <DetailCard
        title="Equity given to accelerator"
        description={data?.equityGivenToAccelerator ?
          `${data.equityGivenToAccelerator}% ${data.equityGivenToAcceleratorCurrency}` : 'N/A'}
      />
    </div>
  );
};

export default Accelerators;
