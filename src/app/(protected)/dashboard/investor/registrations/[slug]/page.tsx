"use client";

import ApprovalStatus from "@/components/global/ApprovalStatus";
import UserInvestorProfileSection from "@/components/global/UserInvestorProfileSection";
import UserTimeline from "@/components/global/UserTimeline";
import InvestorProfileAndKycDetails from "@/components/UserRegistrations/InvestorProfileAndKycDetails";
import { useGetInvestorMetadataQuery } from "@/store/features/dashboardApi";

import React, { useState } from "react";

interface ClientPageProps {
    slug: string;
}

const ClientPage: React.FC<ClientPageProps> = ({ slug }) => {
    const [approvalStatus, setApprovalStatus] = useState<string>("pending");
    const { data, isLoading, error } = useGetInvestorMetadataQuery(slug);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading investor data</div>;
    if (!data) return null;

    return (
        <div className="w-full grid grid-cols-12 gap-5 mt-[12px]">
            <div className="col-span-8 w-full flex flex-col items-start justify-start gap-[24px]">
                <UserInvestorProfileSection data={data} />
                <InvestorProfileAndKycDetails data={data} />
            </div>
            <div className="col-span-4 w-full flex flex-col items-start justify-start gap-[13.5px]">
                <ApprovalStatus approvalStatus={approvalStatus} setApprovalStatus={setApprovalStatus} />
                <UserTimeline />
            </div>
        </div>
    );
};

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = React.use(params);
    return <ClientPage slug={resolvedParams.slug} />;
}
