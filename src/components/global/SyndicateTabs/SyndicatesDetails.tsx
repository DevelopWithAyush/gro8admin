import React from "react";
import SyndicateDetailCard from "./SyndicateDetailCard";
import { cn } from "@/lib/utils";

const SyndicatesDetails = () => {
  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-7 ">
      <SyndicateDetailCard title="GSTIN Number *" description="Enter Name" />
      <SyndicateDetailCard
        title="SEBI Draft offer Document Number  *"
        description="09172375"
      />
      <div
        className={cn(
          " col-span-2 w-full flex flex-col items-start justify-start gap-2"
        )}
      >
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Syndicate Description *
        </p>
              <p className="text-[#26252F] text-[16px] font-rubik-light_300 leading-5">
          Beka is a pioneering venture capitalist syndicate, renowned for its
          bold investments and strategic foresight in the ever-evolving
          landscape of tech startups. With a team of seasoned investors at its
          helm, Phoenix VC rises from the ashes of traditional investment
          paradigms, embodying resilience, adaptability, and a keen eye for
          disruptive innovation. Known for their hands-on approach, they nurture
          fledgling .
        </p>
      </div>
    </div>
  );
};

export default SyndicatesDetails;
