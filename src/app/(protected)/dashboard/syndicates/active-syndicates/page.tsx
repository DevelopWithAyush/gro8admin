"use client"
import SearchAndFilter from "@/components/global/SearchAndFilter";
import SyndicateRegistrations from "@/components/global/SyndicateRegistrations";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
            <SearchAndFilter />
            <SyndicateRegistrations />
        </div>
    );
};

export default Page;
