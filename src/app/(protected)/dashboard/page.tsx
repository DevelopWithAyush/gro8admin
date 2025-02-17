"use client";

import StartupRegistrations from "@/components/global/StartupRegistrations";
import StatsSection from "@/components/global/Stats/indes";
import SyndicateRegistrations from "@/components/global/SyndicateRegistrations";
import UserRegistrations from "@/components/global/InvestorRegistrations";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-5 ">
      <StatsSection />
      <UserRegistrations />
      <StartupRegistrations />
      <SyndicateRegistrations />
    </div>
  );
};

export default Page;
