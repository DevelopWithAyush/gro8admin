"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import MentorTable from "./MentorTable";
import { usePaths } from "@/hooks/user-nav";
import { useGetMentorRegistrationsQuery } from "@/store/features/dashboardApi";
import { useEffect, useState } from "react";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import MentorTableLoader from "./MentorTableLoader";
import CustomPagination from "../CustomPagination";


const getErrorMessage = (
  error: FetchBaseQueryError | SerializedError | undefined
) => {
  if (!error) return "Unknown error occurred";

  if ("status" in error) {
    return `Error: ${error.status} - ${error.data || "Unknown error"}`;
  }

  return error.message || "Unknown error occurred";
};


const MentorRegistrations = () => {
  const { pathname } = usePaths();

  const isMentorList = pathname === "/dashboard/mentor/registrations";

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const {
    data: mentorResponse,
    isLoading,
    error: mentorError,
    refetch,
  } = useGetMentorRegistrationsQuery(
    {
      page: currentPage,
      pageSize,
    },
    {
      skip: typeof window === "undefined",
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-5 bg-[#FFF] flex flex-col items-start justify-start gap-3 border border-solid border-[#E8E8F1] rounded-[12px] w-full">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[#26252F] font-urbanist-regular_400 leading-[110%] text-[25px]">
          Mentor Registrations
        </p>
        {isMentorList ? (
          <></>
        ) : (
          <Link
            href="/dashboard/mentor/registrations"
            className="px-[15px] py-[11px] text-[#000] font-urbanist-semibold_600 text-[16px] flex flex-row capitalize gap-[10px]"
          >
            <span>view all Mentor</span>
            <ChevronRight className="w-[16px] text-[#0061FE]" />
          </Link>
        )}
      </div>
      {isLoading ? (
        <MentorTableLoader />
      ) : mentorError ? (
        <div className="w-full p-4 text-center text-red-500">
          {getErrorMessage(mentorError)}
        </div>
      ) : (
        <MentorTable data={mentorResponse?.data || []} />
      )}
      {isMentorList && mentorResponse?.totalPages ? (
        <div className="flex flex-row items-end justify-end w-full font-rubik-semibold_600">
          <CustomPagination
            currentPage={currentPage}
            totalPages={mentorResponse.totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : null}

    </div>
  );
};

export default MentorRegistrations;
