import React from "react";

interface StartupData {
  name: string;
  registeredName: string;
  websiteUrl: string;
  monthAndYearOfInc: string;
  about: string;
  startupSector: string;
  companyType: string;
  startupAddress: string;
  country: string;
  state: string;
  city: string;
  noOfEmployees: number;
}

const Startup = ({ data }: { data?: StartupData }) => {
  return (
    <div className="w-full">
      <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-7  ">
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Startup Name
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.name || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Registered name of startup
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.registeredName || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Website URL
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.websiteUrl || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Month & year of incorporation
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {new Date(data?.monthAndYearOfInc || '').toLocaleDateString() || 'N/A'}
          </p>
        </div>
        <div className="col-span-2 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            About Startup
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.about || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Startup sector
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.startupSector || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Company type
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.companyType || 'N/A'}
          </p>
        </div>
        <div className="col-span-2 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Startup address
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.startupAddress || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Country
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.country || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            State
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.state || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            City
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.city || 'N/A'}
          </p>
        </div>
        <div className="col-span-1 w-full flex flex-col items-start justify-start gap-1">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Number of employees
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
            {data?.noOfEmployees || 'N/A'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Startup;
