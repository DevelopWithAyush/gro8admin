import React from "react";
import SyndicateDetailCard from "./SyndicateDetailCard";
import { cn } from "@/lib/utils";
import { SyndicateMetadata } from '@/store/features/dashboardApi';

const SyndicatesDetails = ({ data }: { data?: SyndicateMetadata }) => {
  const coreDetails = data?.profile?.syndicateCoreDetails;

  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-7">
      <SyndicateDetailCard title="GSTIN Number *" description={coreDetails?.gstinNumber || "Enter GSTIN"} />
      <SyndicateDetailCard title="SEBI Draft offer Document Number *" description={coreDetails?.sebiDraftOfferDocNo || "Enter number"} />
      <div className={cn("col-span-2 w-full flex flex-col items-start justify-start gap-2")}>
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Syndicate Description *
        </p>
        <p className="text-[#26252F] text-[16px] font-rubik-light_300 leading-5" dangerouslySetInnerHTML={{ __html: coreDetails?.syndicateDescription || "Enter description" }}>
        </p>
      </div>
    </div>
  );
};

export default SyndicatesDetails;
