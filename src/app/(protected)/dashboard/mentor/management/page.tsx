import SearchAndFilter from "@/components/global/SearchAndFilter";
import MentorManagement from "@/components/global/MentorManagement";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
      <SearchAndFilter />
      <MentorManagement />
    </div>
  );
};

export default Page;