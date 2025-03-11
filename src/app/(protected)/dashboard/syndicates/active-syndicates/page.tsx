"use client"
import ActiveSyndicateRegistrations from "@/components/global/ActiveSyndicateRegistrations";
import SearchAndFilter from "@/components/global/SearchAndFilter";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
            <SearchAndFilter />
            <ActiveSyndicateRegistrations />
        </div>
    );
};

export default Page;
