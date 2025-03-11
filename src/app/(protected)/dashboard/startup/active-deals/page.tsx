import SearchAndFilter from "@/components/global/SearchAndFilter";
import StartupActiveDeals from "@/components/global/StartupActiveDeals";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
            <SearchAndFilter />
            <StartupActiveDeals />
        </div>
    );
};

export default Page;
