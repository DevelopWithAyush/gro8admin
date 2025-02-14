import ApprovalStatus from "@/components/global/ApprovalStatus";
import ProfileAndKycDetails from "@/components/UserRegistrations/ProfileAndKycDetails";
import UserProfileSection from "@/components/global/UserProfileSection";
import UserTimeline from "@/components/global/UserTimeline";
import React from "react";

const Page = () => {
    return (
        <div className="w-full grid grid-cols-12 gap-5 mt-[12px]">
            <div className="col-span-8 w-full flex flex-col items-start justify-start gap-[24px]">
                <UserProfileSection />
                <ProfileAndKycDetails />
            </div>
            <div className="col-span-4 w-full flex flex-col items-start justify-start gap-[13.5px]">
                <ApprovalStatus />
                <UserTimeline />
            </div>
        </div>
    );
};

export default Page;
