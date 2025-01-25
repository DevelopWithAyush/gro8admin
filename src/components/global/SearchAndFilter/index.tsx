"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import Filter from "./Filter";
import SortBy from "./SortBy";
import Actions from "./Actions";

const SearchAndFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string | null>(null);
  const [selectedActions, setSelectedActions] = useState<string | null>(null); 

  return (
    <div className="py-[5px] w-full flex flex-row items-center justify-between ">
      <div className="flex flex-row items-center bg-[#FFF] rounded-[8px] py-[10px] px-[10px] border border-solid border-[#D9D9E4]  ">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent text-[16px] font-rubik-light_300 text-[#57575F] leading-[20px] outline-none min-w-[300px]    "
        />
        <Search className="w-[16px] text-[#57575F]" />
      </div>
      <div className="flex flex-row gap-[10px] items-center justify-start">
        <Filter
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <SortBy setSortBy={setSelectedSort} sortBy={selectedSort} />
        <Actions setActions={setSelectedActions} actions={selectedActions} />
      </div>
    </div>
  );
};

export default SearchAndFilter;
