"use client";
import { motion } from "motion/react";
import { useState } from "react";
import KycDetails from "./KycDetails";
import ProfileSection from "./ProfileSection";

interface MentorData {
  profile: {
    mentorProfile: {
      country: string;
      state: string;
      city: string;
      gender: string;
      industryPreferences: number[];
      expertise: {
        startups: Array<{
          name: string;
          url: string;
          details: string;
        }>;
      };
      firstName: string;
      lastName: string;
      occupation: string;
      idDocument: {
        imageUri: string;
      };
      typeOfVerification: string;
      networthExceeds1M: boolean;
      avgIncomeOf200kFor2Years: boolean;
    };
  };
}

const MentorProfileAndKycDetails = ({ data }: { data: MentorData }) => {
  const [activeTab, setActiveTab] = useState<"profile" | "kyc">("profile");

  const tabs = [
    { id: "profile", label: "Profile Details" },
    { id: "kyc", label: "KYC Details" },
  ];
  return (
    <div className="flex flex-col items-start justify-normal w-full gap-3">
      <div className="relative flex items-center gap-x-2  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`relative z-10 text-[12px] px-[9px] py-[7px] font-rubik-regular_400 ${activeTab === tab.id
              ? "text-white"
              : "text-gray-600 hover:text-gray-800"
              }`}
            onClick={() => setActiveTab(tab.id as "profile" | "kyc")}
          >
            {tab.label}
          </button>
        ))}

        {/* Sliding Background */}
        <motion.div
          className="absolute bg-gray-900 rounded-full h-full"
          layout
          initial={false}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          style={{
            width: activeTab === "profile" ? "95px" : "100px", // Adjust button widths
            left: activeTab === "profile" ? "0px" : "95px", // Adjust left positioning
          }}
        />
      </div>
      <motion.div
        className="p-5 flex flex-row items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-[15px] "
        key={activeTab} // Ensures smooth animation of content
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "profile" && (
          <ProfileSection data={data.profile.mentorProfile} />
        )}
        {activeTab === "kyc" && (
          <KycDetails data={{
            firstName: data.profile.mentorProfile.firstName,
            lastName: data.profile.mentorProfile.lastName,
            occupation: data.profile.mentorProfile.occupation,
            country: data.profile.mentorProfile.country,
            idDocument: data.profile.mentorProfile.idDocument,
            typeOfVerification: data.profile.mentorProfile.typeOfVerification,
            networthExceeds1M: data.profile.mentorProfile.networthExceeds1M,
            avgIncomeOf200kFor2Years: data.profile.mentorProfile.avgIncomeOf200kFor2Years,
          }} />
        )}
      </motion.div>
    </div>
  );
};

export default MentorProfileAndKycDetails;
