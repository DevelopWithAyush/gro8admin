"use client";
import React from "react";
import UserTable from "./MentorTable";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const MentorRegistrations = () => {
  return (
    <div className="p-5 bg-[#FFF] flex flex-col items-start justify-start gap-3 border border-solid border-[#E8E8F1] rounded-[12px] w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[#26252F] font-urbanist-regular_400 leading-[110%] text-[25px]">
          User Registrations
        </p>
        <Link
          href="/dashboard/user/registrations"
          className="px-[15px] py-[11px] text-[#000] font-urbanist-semibold_600 text-[16px] flex flex-row capitalize gap-[10px]"
        >
          <span>view all Users</span>
          <ChevronRight className="w-[16px] text-[#0061FE]" />
        </Link>
      </div>
      <UserTable />
    </div>
  );
};

export default MentorRegistrations;
