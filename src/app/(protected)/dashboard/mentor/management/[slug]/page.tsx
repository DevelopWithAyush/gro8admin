"use client"
import ApprovalStatus from "@/components/global/ApprovalStatus";
import UserTimeline from "@/components/global/UserTimeline";
import ProfileKycAndUserDetails from "@/components/UserManagement/ProfileKycAndUserDetails";
import { useState } from "react";

const Page = () => {
    const [approvalStatus, setApprovalStatus] = useState<string>("pending");
    return (
        <div className="w-full grid grid-cols-12 gap-5 mt-[12px]">
            <div className="col-span-8 w-full flex flex-col items-start justify-start gap-[24px]">
                {/* <UserProfileSection  /> */}
                <ProfileKycAndUserDetails />
            </div>
            <div className="col-span-4 w-full flex flex-col items-start justify-start gap-[13.5px]">
                <ApprovalStatus approvalStatus={approvalStatus} setApprovalStatus={setApprovalStatus} />
                <UserTimeline />
            </div>
        </div>
    );
};

export default Page;
