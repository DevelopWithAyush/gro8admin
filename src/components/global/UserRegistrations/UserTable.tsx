// components/UserTable.tsx
"use client";
import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePaths } from "@/hooks/user-nav";
import { useGetInvestorRegistrationsQuery, useGetMentorRegistrationsQuery } from "@/store/features/dashboardApi";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  accountType: string;
  registrationDate: string;
  linkedinAccount: string;
  country: string;
};

const formatDate = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch (error) {
    console.error('Error formatting date:', error);
    return dateString;
  }
};

const getErrorMessage = (error: FetchBaseQueryError | SerializedError | undefined) => {
  if (!error) return 'Unknown error occurred';

  if ('status' in error) {
    return `Error: ${error.status} - ${error.data || 'Unknown error'}`;
  }

  return error.message || 'Unknown error occurred';
};

const UserTable: React.FC = () => {
  const { pathname } = usePaths();

  const columns: ColumnDef<User>[] = [
    {
      accessorFn: (row) => `${row.firstName} ${row.lastName}`,
      header: "Name",
    },
    {
      accessorKey: "accountType",
      header: "Account Type",
      cell: ({ getValue }) => {
        const accountType = getValue<string>();
        return (
          <div className="flex flex-col items-start justify-start">
            <p
              className={cn(
                accountType === "INVESTOR" && "bg-[#6B9CEC]",
                accountType === "MENTOR" && "bg-[#F56D6D]",
                "px-1 py-[1px] text-[8px] font-bold leading-normal rounded-[8px] flex flex-col items-center justify-center text-[#FEFEFE] uppercase"
              )}
            >
              {accountType}
            </p>
          </div>
        );
      },
    },
    {
      accessorKey: "registrationDate",
      header: "Registration Date",
      cell: ({ getValue }) => formatDate(getValue<string>())
    },
    {
      accessorKey: "linkedinAccount",
      header: "LinkedIn Account",
      cell: ({ getValue }) => {
        const linkedin = getValue<string>();
        return linkedin && linkedin !== "Nil" ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View
          </a>
        ) : (
          <span className="text-gray-400">-</span>
        );
      },
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <Link
          href={`${pathname === "/dashboard/user/registrations"
            ? `/dashboard/user/registrations/${row.original.accountType.toLowerCase()}/${row.original.id}`
            : pathname === "/dashboard/user/management"
              ? `/dashboard/user/management/${row.original.id}`
              : `/dashboard/user/registrations/${row.original.accountType.toLowerCase()}/${row.original.id}`}`}
          className="flex flex-row items-center justify-start gap-2"
        >
          <span className="text-[16px] font-urbanist-semibold_600">
            View User Details
          </span>
          <ChevronRight className="text-[#0061FE] w-[16px]" />
        </Link>
      ),
    },
  ];

  const { data: investorResponse, isLoading: isLoadingInvestors, error: investorError } = useGetInvestorRegistrationsQuery({
    page: 1,
    pageSize: 10
  }, {
    skip: typeof window === 'undefined'
  });

  const { data: mentorResponse, isLoading: isLoadingMentors, error: mentorError } = useGetMentorRegistrationsQuery({
    page: 1,
    pageSize: 10
  }, {
    skip: typeof window === 'undefined'
  });

  const combinedData = [
    ...(investorResponse?.data || []),
    ...(mentorResponse?.data || [])
  ];

  const table = useReactTable({
    data: combinedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Now handle loading, error and empty states
  if (isLoadingInvestors || isLoadingMentors) {
    return <div className="w-full p-4 text-center text-gray-500">Loading user data...</div>;
  }

  if (investorError || mentorError) {
    return <div className="w-full p-4 text-center text-red-500">{getErrorMessage(investorError || mentorError)}</div>;
  }

  if (combinedData.length === 0) {
    return <div className="w-full p-4 text-center text-gray-500">No user data available</div>;
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-[#E8E8F1] table-auto">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-5 py-[13px] text-left text-[12px] font-rubik-regular_400 text-[#32363B] border-b border-[#E8E8F1]"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-5 py-[13px] text-[14px] font-rubik-regular_400 text-[#32363B] border-t border-[#E8E8F1]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
