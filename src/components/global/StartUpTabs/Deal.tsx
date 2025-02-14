import React from "react";
import DetailCard from "./DetailCard";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface DealData {
  howIsYourTeamBestAtProblemSolving: string;
  whatIsYourVision: string;
  whatIsGoToMarketStrategyAdopted: string;
  whenDoYouPlanToCloseThisRound: string;
  investmentTermDocs: {
    imageUri: string;
  };
}

const Deal = ({ data }: { data?: DealData }) => {
  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-8 ">
      <DetailCard
        colSpan2={true}
        title="How is your team the best to solve the problem that you're trying to tackle?"
        description={data?.howIsYourTeamBestAtProblemSolving || 'N/A'}
      />
      <DetailCard
        colSpan2={true}
        title="What is your vision in terms of scaling your Startup?"
        description={data?.whatIsYourVision || 'N/A'}
      />
      <DetailCard
        colSpan2={true}
        title="What is the go to market strategy being adopted by the startup?"
        description={data?.whatIsGoToMarketStrategyAdopted || 'N/A'}
      />
      <DetailCard
        colSpan2={true}
        title="When do you plan to close this round?"
        description={data?.whenDoYouPlanToCloseThisRound || 'N/A'}
      />
      <div className={cn(" col-span-1 w-full flex flex-col items-start justify-start gap-1")}>
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Please share the investment terms for this round in detail
        </p>
        <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
          {data?.investmentTermDocs?.imageUri ? (
            <>
              Investment Terms <ExternalLink className="w-[16px] text-[#0061FE]" />
            </>
          ) : (
            'N/A'
          )}
        </p>
      </div>
    </div>
  );
};

export default Deal;
