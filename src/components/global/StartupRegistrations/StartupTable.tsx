// components/StartupTable.tsx
import { usePaths } from "@/hooks/user-nav";
import { useGetStartupRegistrationsQuery } from "@/store/features/dashboardApi";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

type Startup = {
  id: string;
  name: string;
  founder: string;
  marketType: string;
  website: string;
  accountType: string;
  registrationDate: string;
  country: string;
  profilePicture: string;
};

const StartupTable = () => {
  const { pathname } = usePaths();
  const { data: startupData, isLoading, refetch } = useGetStartupRegistrationsQuery({
    page: 1,
    pageSize: 10,
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  

  const columns: ColumnDef<Startup>[] = [
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
      accessorKey: "founder",
      header: "Founder",
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
      accessorKey: "marketType",
      header: "Market Type",
    },

    {
      accessorKey: "website",
      header: "Website",
      cell: ({ getValue }) => (
        <a
          href={getValue<string>()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View
        </a>
      ),
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
          href={`${pathname === "/dashboard/startup/deal-registration"
            ? `/dashboard/startup/deal-registration/${row.original.id}`
            : pathname === "/dashboard/startup/active-deals"
              ? `/dashboard/startup/active-deals/${row.original.id}`
              : `/dashboard/startup/deal-registration/${row.original.id}`
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
    data: startupData?.data || [],
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
  );
};

export default StartupTable;
