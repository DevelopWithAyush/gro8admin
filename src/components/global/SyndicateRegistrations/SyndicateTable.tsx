// components/SyndicateTable.tsx
import { useGetSyndicatesQuery } from "@/store/features/dashboardApi";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, {  useEffect } from "react";

type Syndicate = {
  id: string;
  profilePicture: string;
  name: string;
  founder: string;
  registrationDate: string;
  investmentType: number[];
  website: string;
  country: string;
};

interface Props {
  page: number;
  pageSize: number;
}

const SyndicateTable: React.FC<Props> = ({ page, pageSize }) => {
  const { data, isLoading ,refetch } = useGetSyndicatesQuery({ page, pageSize });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const columns: ColumnDef<Syndicate>[] = [
    {
      accessorKey: "name",
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
      )
    },
    {
      accessorKey: "founder",
      header: "Founder",
    },
    {
      accessorKey: "country",
      header: "Country",
    },
    {
      accessorKey: "website",
      header: "Website",
      cell: ({ row }) => (
        <a
          href={row.original.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {row.original.website}
        </a>
      )
    },
    {
      accessorKey: "registrationDate",
      header: "Registration Date",
      cell: ({ row }) => new Date(row.original.registrationDate).toLocaleDateString()
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <Link
          href={`/dashboard/syndicates/registrations/${row.original.id}`} 
          className="flex flex-row items-center justify-start gap-2"
        >
          <span className="text-[16px] font-urbanist-semibold_600">
            View Details
          </span>
          <ChevronRight className="text-[#0061FE] w-[16px]" />
        </Link>
      ),
    },
  ];

  const table = useReactTable({
    data: data?.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) {
    return (
      <div className="w-full p-4">
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mb-2"></div>
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mb-2"></div>
        <div className="h-10 bg-gray-200 animate-pulse rounded-md mb-2"></div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-[#E8E8F1] table-auto">
        <thead className="">
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

export default SyndicateTable;
