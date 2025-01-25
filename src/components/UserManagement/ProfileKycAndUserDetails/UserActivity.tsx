import ActiveInvestments from "./ActiveInvestments";
import SyndicatesJoined from "./SyndicatesJoined";

const UserActivity = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-2">
      <div className="p-5 grid grid-cols-2 gap-y-8 gap-x-4  border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-[15px]">
        <p className="col-span-2 text-[#26252F] text-[25px] font-urbanist-regular_400 ">
          Basic Details
        </p>
        <div className="col-span-1 flex flex-col gap-1 ">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Total Invested Amount
          </p>
          <p className="text-[#151517] text-[16px] flex flex-row items-center font-rubik-regular_400   leading-[110%]">
            $74,975,234
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-1 ">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Number of startups invested in
          </p>
          <p className="text-[#151517] text-[16px] flex flex-row items-center font-rubik-regular_400   leading-[110%]">
            234
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-1 ">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Total Invested Amount
          </p>
          <p className="text-[#151517] text-[16px] flex flex-row items-center font-rubik-regular_400   leading-[110%]">
            $74,975,234
          </p>
        </div>
        <div className="col-span-1 flex flex-col gap-1 ">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Number of Active Syndicates
          </p>
          <p className="text-[#151517] text-[16px] flex flex-row items-center font-rubik-regular_400   leading-[110%]">
            $74,975,234
          </p>
        </div>
      </div>
      <ActiveInvestments />
      <SyndicatesJoined />
    </div>
  );
};

export default UserActivity;
