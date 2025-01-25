"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useState } from "react";

import UserActivity from "./UserActivity";
import Startup from "../StartUpTabs/Startup";
import Business from "../StartUpTabs/Business";
import Team from "../StartUpTabs/Team";
import KPI from "../StartUpTabs/KPI";
import GrantsAndFunding from "../StartUpTabs/GrantsAndFunding";
import Deal from "../StartUpTabs/Deal";
import Accelerators from "../StartUpTabs/Accelerators";

type Tab = {
  id: string;
  label: string;
};

const DealsListTabs = ({
  containerClassName,

  tabClassName,
}: {
  containerClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const propTabs = [
    { id: "startup", label: "Startup" },
    { id: "business", label: "Business" },
    { id: "team", label: "Team" },
    { id: "kpi", label: "KPI" }, // Add as many tabs as you want
    { id: "grants&funding", label: "Grants & Funding" },
    { id: "deal", label: "Deal Curation" },
    { id: "accelerators", label: "Accelerators " },
    { id: "user", label: "User Activity " },
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
                layoutId="clickedbutton"
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
        {active.id === "startup" && <Startup />}
        {active.id === "business" && <Business />}
        {active.id === "team" && <Team />}
        {active.id === "kpi" && <KPI />}
        {active.id === "grants&funding" && <GrantsAndFunding />}
        {active.id === "deal" && <Deal />}
        {active.id === "accelerators" && <Accelerators />}
        {active.id === "user" && <UserActivity />}
      </motion.div>
    </div>
  );
};

export default DealsListTabs;
