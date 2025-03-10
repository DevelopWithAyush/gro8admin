// components/DealsTable.tsx
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Deal = {
  id: string;
  startupId: string;
  targetAndRaised: {
    totalRaised: number;
    percentageAchieved: number;
    fundingGoalUsd: string;
  };
  name: string;
  startupName: string;
  expiry: string;
  avatar: string;
  status: string;
};

interface DealsTableProps {
  data: Deal[];
}

const DealsTable = ({ data }: DealsTableProps) => {
  const columns: ColumnDef<Deal>[] = [
    {
      accessorFn: (row) => `${row.avatar} ${row.startupName}`,
      header: "Startup",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-[4px] overflow-hidden">
            <Image
              src={row.original.avatar || "/images/profile1.png"}
              alt={row.original.startupName}
              fill
              className="object-cover"
            />
          </div>
          <span>{row.original.startupName}</span>
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Round Name",
    },
    {
      accessorKey: "expiry",
      header: "Expiry",
      cell: ({ getValue }) => {
        const date = new Date(getValue<string>());
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
      }
    },
    {
      accessorFn: (row) => row.targetAndRaised.fundingGoalUsd,
      header: "Target Amount",
      cell: ({ getValue }) => {
        const amount = parseInt(getValue<string>());
        return `$${amount.toLocaleString()}`;
      }
    },
    {
      accessorFn: (row) => row.targetAndRaised.totalRaised,
      header: "Amount Raised",
      cell: ({ getValue }) => {
        return `$${getValue<number>().toLocaleString()}`;
      }
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ getValue }) => (
        <span className={`px-2 py-1 rounded ${getValue<string>() === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
          getValue<string>() === 'APPROVED' ? 'bg-green-100 text-green-800' :
            'bg-gray-100 text-gray-800'
          }`}>
          {getValue<string>()}
        </span>
      ),
    },
    {
      id: "actions",
      header: "",
      cell: ({ row }) => (
        <Link
          href={`/dashboard/startup/deal-registration/${row.original.startupId}?dealId=${row.original.id}`}
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
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

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

export default DealsTable;
