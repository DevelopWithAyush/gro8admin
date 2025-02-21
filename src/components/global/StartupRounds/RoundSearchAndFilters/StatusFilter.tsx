import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {
    setActions: React.Dispatch<React.SetStateAction<string | null>>;
    actions: string | null;
};

const StatusFilter = ({ setActions, actions }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className=" flex 
        flex-row
        items-center
        justify-start
    
        rounded-[8px]
        p-[10px]
        text-[16px]
        leading-5
        font-rubik-semibold_600

        gap-[10px]
        text-[#262626]

        focus:outline-none
        
          "
                >
                    {actions || "Fund Type"} <ChevronDown className="w-[16px] text-[#0061FE] " />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-lg border border-gray-200 mt-2">
                <DropdownMenuItem
                    onClick={() => setActions(null)}
                    className="px-4 py-2 hover:bg-gray-100  hover:border-nonecursor-pointer text-sm text-gray-700"
                >
                    All
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setActions("Category A")}
                    className="px-4 py-2 hover:bg-gray-100 hover:border-none cursor-pointer text-sm text-gray-700"
                >
                    Category A
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setActions("Category B")}
                    className="px-4 py-2 hover:bg-gray-100  hover:border-none cursor-pointer text-sm text-gray-700"
                >
                    Category B
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => setActions("Category C")}
                    className="px-4 py-2 hover:bg-gray-100  hover:border-none cursor-pointer text-sm text-gray-700"
                >
                    Category C
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default StatusFilter;
