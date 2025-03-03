"use client"
// components/SyndicateTable.tsx
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import React from "react";


import { cn } from "@/lib/utils";
import { useUpdatePledgeMutation } from '@/store/features/dashboardApi';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import UpdatePledgeModal from './UpdatePledgeModal';

interface Pledge {
    id: string;
    firstName: string;
    lastName: string;
    amountUsd: number;
    pledgeStage: string;
    stageStatus: string;
    createdAt: string;
}

interface Props {
    pledges?: Pledge[];
    isLoading?: boolean;
    error?: FetchBaseQueryError | SerializedError | null;
}

const PledgeTable: React.FC<Props> = ({ pledges = [], isLoading, error }) => {
    const [selectedPledge, setSelectedPledge] = React.useState<Pledge | null>(null);
    const [updatePledge] = useUpdatePledgeMutation();

    const handleRowClick = (pledge: Pledge) => {
        setSelectedPledge(pledge);
    };

    const handleUpdatePledge = async (pledgeId: string, data: { stageStatus: string; pledgeStage: string }) => {
        try {
            await updatePledge({
                id: pledgeId,
                data
            }).unwrap();
            setSelectedPledge(null);
        } catch (error) {
            console.error('Failed to update pledge:', error);
        }
    };

    const columns: ColumnDef<Pledge>[] = [
        {
            accessorFn: (row) => `${row.firstName} ${row.lastName}`,
            header: "Investor Name",
        },
        {
            accessorKey: "createdAt",
            header: "Date Onboarded",
            cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString()
        },
        {
            accessorKey: "amountUsd",
            header: "Amount Pledged",
            cell: ({ getValue }) => `$${getValue<number>().toLocaleString()}`
        },
        {
            accessorKey: "pledgeStage",
            header: "Stage",
        },
        {
            accessorKey: "stageStatus",
            header: "Status",
            cell: ({ getValue }) => {
                return (
                    <div className="flex flex-col items-start justify-start">
                        <p className={cn(
                            "px-1 py-[1px] text-[8px] font-bold leading-normal rounded-[8px] flex flex-col items-center justify-center text-[#FEFEFE] uppercase",
                            getValue<string>() === "OPPORTUNITY" && "bg-[#6B9CEC]",
                            getValue<string>() === "APPROVED" && "bg-[#4CAF50]",
                            getValue<string>() === "WIP" && "bg-[#FFA726]",
                            getValue<string>() === "DROPPED" && "bg-[#F56D6D]",
                        )}>
                            {getValue<string>()}
                        </p>
                    </div>
                );
            },
        },
    ];

    const table = useReactTable({
        data: pledges,
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

    if (error) {
        return <div>Error loading pledges data</div>;
    }

    return (
        <>
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
                            <tr
                                key={row.id}
                                className="hover:bg-gray-50 cursor-pointer"
                                onClick={() => handleRowClick(row.original)}
                            >
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

            <UpdatePledgeModal
                isOpen={!!selectedPledge}
                onClose={() => setSelectedPledge(null)}
                pledgeId={selectedPledge?.id || ''}
                currentStageStatus={selectedPledge?.stageStatus || ''}
                currentPledgeStage={selectedPledge?.pledgeStage || ''}
                onUpdate={handleUpdatePledge}
            />
        </>
    );
};

export default PledgeTable;
