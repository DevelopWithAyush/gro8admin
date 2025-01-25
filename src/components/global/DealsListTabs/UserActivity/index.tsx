
"use client"
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import React, { useState } from 'react'
import Activity from './Activity';

type Tab = {
  id: string;
  label: string;
};

const UserActivity = ({
  containerClassName,

  tabClassName,
}: {
  containerClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {

    const propTabs = [
      { id: "all", label: "All" },
      { id: "post", label: "Post" },
      { id: "events", label: "Events" },
      
    ];
  
    const [active, setActive] = useState<Tab>(propTabs[0]);
  
    const moveSelectedTabToTop = (idx: number) => {
      const newTabs = [...propTabs];
      const selectedTab = newTabs.splice(idx, 1);
      newTabs.unshift(selectedTab[0]);
      setActive(newTabs[0]);
    };
  
  return (
      <div className='p-5 flex flex-col items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] '>
          
      <div className="w-full flex flex-col items-start justify-start gap-[13px]">
        <div
          className={cn(
            "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar  max-w-full w-full ",
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
                "relative px-[26px] py-[7px] rounded-[16.5px]",
                tabClassName
              )}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {active.id === tab.id && (
                <motion.div
                  layoutId="activity"
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
        <Activity active={active.id}   />
        {/* <motion.div
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
        
        </motion.div> */}
      </div>
    </div>
  )
}

export default UserActivity
