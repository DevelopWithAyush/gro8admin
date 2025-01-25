import SearchAndFilter from "@/components/global/SearchAndFilter";
import StartupRegistrations from "@/components/global/StartupRegistrations";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
            <SearchAndFilter />
            <StartupRegistrations />
        </div>
    );
};

export default Page;
