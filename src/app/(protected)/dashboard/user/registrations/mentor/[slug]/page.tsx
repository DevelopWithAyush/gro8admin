"use client";
import ApprovalStatus from "@/components/global/ApprovalStatus";
import UserMentorProfileSection from "@/components/global/UserMentorProfileSection";
import UserTimeline from "@/components/global/UserTimeline";
import { fetchMentorMetadata } from "@/store/features/mentorMetadataSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    const params = useParams();
    const slug = params?.slug;
    const { data, loading, error } = useSelector((state: RootState) => state.mentorMetadata);

    useEffect(() => {
        if (typeof slug === 'string') {
            dispatch(fetchMentorMetadata(slug));
        }
    }, [dispatch, slug]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!data) return null;

    return (
        <div className="w-full grid grid-cols-12 gap-5 mt-[12px]">
            <div className="col-span-8 w-full flex flex-col items-start justify-start gap-[24px]">
                <UserMentorProfileSection data={data} />
                {/* <MentorProfileAndKycDetails data={data} /> */}
            </div>
            <div className="col-span-4 w-full flex flex-col items-start justify-start gap-[13.5px]">
                <ApprovalStatus />
                <UserTimeline />
            </div>
        </div>
    );
};

export default Page;
