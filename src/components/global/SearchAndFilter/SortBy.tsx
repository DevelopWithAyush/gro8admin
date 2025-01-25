import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CgSortAz } from "react-icons/cg";
import React from "react";

type Props = {
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
  sortBy: string | null;
};

const SortBy = ({ setSortBy, sortBy }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className=" flex 
        flex-row
        items-center
        justify-start
        border-solid
        border
        border-[#D9D9E4]
        text-[#57575F]
        rounded-[8px]
        p-[10px]
        text-[16px]
        leading-5
        font-rubik-light_300
          "
        >
                  {sortBy || "Sort by"} <CgSortAz className="text-[24px] text-[#57575F]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-lg border border-gray-200 mt-2">
        <DropdownMenuItem
          onClick={() => setSortBy(null)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          All
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSortBy("Category A")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          Category A
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSortBy("Category B")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          Category B
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSortBy("Category C")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          Category C
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortBy;
