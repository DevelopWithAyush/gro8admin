// components/StartupTable.tsx
import { usePaths } from "@/hooks/user-nav";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

interface StartupTableProps {
    data: Startup[];
}

const StartupActiveTable = ({ data }: StartupTableProps) => {
    const { pathname } = usePaths();

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
                    href={`${pathname === "/dashboard/startup/registration"
                        ? `/dashboard/startup/registration/${row.original.id}`
                        : pathname === "/dashboard/startup/active-deals"
                            ? `/dashboard/startup/active-deals/${row.original.id}`
                            : `/dashboard/startup/registration/${row.original.id}`
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

export default StartupActiveTable;
