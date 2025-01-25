import React from "react";
import InvestmentCard from "./InvestmentCard";

const ActiveInvestments = () => {
  return (
    <div className="p-5 flex flex-col items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF]  rounded-[12px] gap-[32px]">
      <p className=" text-[#26252F] text-[25px] font-urbanist-regular_400 ">
        Active Investments
      </p>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 w-full">
        <InvestmentCard />
        <InvestmentCard />
        <InvestmentCard />
        <InvestmentCard />
        <InvestmentCard />
        <InvestmentCard />
      </div>
    </div>
  );
};

export default ActiveInvestments;
