"use client";

import InvestorRegistrations from "@/components/global/InvestorRegistrations";
import MentorRegistrations from "@/components/global/MentorRegistrations";
import StartupRegistrations from "@/components/global/StartupRegistrations";
import StatsSection from "@/components/global/Stats/indes";
import SyndicateRegistrations from "@/components/global/SyndicateRegistrations";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-5 ">
      <StatsSection />
      <InvestorRegistrations />
      <MentorRegistrations />
      <StartupRegistrations />
      <SyndicateRegistrations />
    </div>
  );
};

export default Page;
