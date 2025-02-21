// components/MentorTable.tsx
"use client";
import { usePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type User = {
  id: string;
  name: string;
  profilePicture: string;
  accountType: string;
  registrationDate: string;
  linkedinAccount: string;
  country: string;
};




const MentorTable = ({ data }: { data: User[] }) => {

  const { pathname } = usePaths();

  const columns: ColumnDef<User>[] = [
    {
      accessorFn: (row) => `${row.profilePicture} ${row.name}`,
      header: "Name",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-[4px] overflow-hidden">
            <Image
              src={row.original.profilePicture || "/images/profile1.png"}
              alt={row.original.name} 
              fill
              className="object-cover"
            />
          </div>
          <span>{row.original.name}</span>
        </div>
      ),
      
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
      cell: ({ getValue }) => {
        const date = new Date(getValue<string>());
        return date.toLocaleDateString();
      }
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
          href={`${
            pathname === "/dashboard/mentor/registrations"
              ? `/dashboard/mentor/registrations/${
                  row.original.id
                }`
              : pathname === "/dashboard/mentor/management"
              ? `/dashboard/mentor/management/${row.original.id}`
              : `/dashboard/mentor/registrations/${
                  row.original.id
                }`
          }`}
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



  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });





  return (
    data.length > 0 ? (
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
                  className="px-5 py-[4.5px] text-[14px] font-rubik-regular_400 text-[#32363B] border-t border-[#E8E8F1]"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-center w-full text-red-500 font-rubik-bold_700"> No data found</p>
  )
  );
};

export default MentorTable;
