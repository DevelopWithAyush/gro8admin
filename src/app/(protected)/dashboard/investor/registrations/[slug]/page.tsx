"use client";
import ApprovalStatus from "@/components/global/ApprovalStatus";
import UserInvestorProfileSection from "@/components/global/UserInvestorProfileSection";
import UserTimeline from "@/components/global/UserTimeline";
import InvestorProfileAndKycDetails from "@/components/UserRegistrations/InvestorProfileAndKycDetails";
import { fetchInvestorMetadata } from "@/store/features/investorMetadataSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [approvalStatus, setApprovalStatus] = useState<string>("pending");
    const params = useParams();
    const { data, loading, error } = useSelector((state: RootState) => state.investorMetadata);

    useEffect(() => {
        if (params.slug) {
            dispatch(fetchInvestorMetadata(params.slug as string));
        }
    }, [dispatch, params.slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
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

export default Page;
