"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState } from "react";
import PrimaryDetails from "./PrimaryDetails";
import InvestorDetails from "./InvestorDetails";
import SyndicatesDetails from "./SyndicatesDetails";
import { SyndicateMetadata } from '@/store/features/dashboardApi';

type Tab = {
  id: string;
  label: string;
};

const SyndicateTabs = ({
  containerClassName,
  tabClassName,
  data
}: {
  containerClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  data?: SyndicateMetadata;
}) => {
  const propTabs = [
    { id: "primary", label: "Primary Details" },
    { id: "investor", label: "Investor Details" },
    { id: "syndicate", label: "Syndicate Details" },
  ];

  const [active, setActive] = useState<Tab>(propTabs[0]);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setActive(newTabs[0]);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-[13px]">
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar  max-w-full w-full gap-2",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.id}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={cn(
              "relative px-[9px] py-[7px] rounded-[16.5px]",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.id === tab.id && (
              <motion.div
                layoutId="syndicatetabs"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-[#343434]  rounded-[16.5px]"
                )}
              />
            )}

            <span
              className={cn(
                "relative block text-[12px] font-rubik-regular_400 ",
                tab.id === active.id && "text-[#FFF]"
              )}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
      <motion.div
        className=" w-full"
        key={active.id} // Ensures smooth animation of content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {active.id === "primary" && <PrimaryDetails data={data} />}
        {active.id === "investor" && <InvestorDetails data={data} />}
        {active.id === "syndicate" && <SyndicatesDetails data={data} />}
      </motion.div>
    </div>
  );
};

export default SyndicateTabs;
