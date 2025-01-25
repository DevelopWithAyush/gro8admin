"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import KycDetails from "./KycDetails";
import UserActivity from "./UserActivity";

const ProfileKycAndUserDetails = () => {
  const [activeTab, setActiveTab] = useState<"profile" | "kyc" | "user">(
    "profile"
  );

  const tabs = [
    { id: "profile", label: "Profile Details" },
    { id: "kyc", label: "KYC Details" },
    { id: "user", label: "User Activity" },
  ];

  return (
    <div className="flex flex-col items-start justify-normal w-full gap-3">
      <div className="relative flex items-center gap-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative z-10 text-[12px] px-[9px] py-[7px] font-rubik-regular_400 ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
            onClick={() => setActiveTab(tab.id as "profile" | "kyc" | "user")} // Fixed type to include "user"
          >
            {tab.label}
          </button>
        ))}

        {/* Sliding Background */}
        <motion.div
          className="absolute top-0 left-0 bg-gray-900 rounded-full h-full"
          layout
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width:
              activeTab === "profile"
                ? "95px"
                : activeTab === "kyc"
                ? "100px"
                : "95px", // Adjust button widths
            left:
              activeTab === "profile"
                ? "0px"
                : activeTab === "kyc"
                ? "95px"
                : "190px", // Adjust left positioning for each tab
          }}
        />
      </div>

      {/* Tab Content */}
      <motion.div
        className="w-full"
        key={activeTab} // Ensures smooth animation of content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "profile" && <ProfileSection />}
        {activeTab === "kyc" && <KycDetails />}
        {activeTab === "user" && <UserActivity />} {/* Add user tab content */}
      </motion.div>
    </div>
  );
};

export default ProfileKycAndUserDetails;
