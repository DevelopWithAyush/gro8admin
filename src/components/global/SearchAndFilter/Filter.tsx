import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

type Props = {
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
  selectedCategory: string | null;
};

const Filter = ({ setSelectedCategory, selectedCategory }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
              <button className=" flex 
        flex-row
        items-center
        justify-start
        border-solid
        border
        border-[#D9D9E4]
        rounded-[8px]
        p-[10px]
        text-[16px]
        leading-5
        font-rubik-light_300
        bg-[#FFF]
         text-[#57575F]
        gap-[60px] ">
                  {selectedCategory || "Filters"} <ChevronDown className="w-[16px] text-[#57575F]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-lg rounded-lg border border-gray-200 mt-2">
        <DropdownMenuItem
          onClick={() => setSelectedCategory(null)}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          All
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelectedCategory("Category A")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          Category A
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelectedCategory("Category B")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          Category B
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setSelectedCategory("Category C")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          Category C
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Filter;
