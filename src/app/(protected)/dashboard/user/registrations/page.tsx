import SearchAndFilter from "@/components/global/SearchAndFilter";
import UserRegistrations from "@/components/global/UserRegistrations";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
      <SearchAndFilter />
      <UserRegistrations />
    </div>
  );
};

export default Page;
