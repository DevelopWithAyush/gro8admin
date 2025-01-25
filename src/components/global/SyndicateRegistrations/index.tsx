import { ChevronRight } from "lucide-react";
import Link from "next/link";
import SyndicateTable from "./SyndicateTable";

const SyndicateRegistrations = () => {
  return (
    <div className="p-5 bg-[#FFF] flex flex-col items-start justify-start gap-3 border border-solid border-[#E8E8F1] rounded-[12px] w-full  ">
      <div className="flex flex-row items-center justify-between w-full">
        <p className="text-[#26252F] font-urbanist-regular_400 leading-[110%] text-[25px] ">
          Syndicate Registrations
        </p>
        <Link
          href={"/"}
          className="px-[15px] py-[11px] text-[#000] font-urbanist-semibold_600 text-[16px] flex flex-row  gap-[10px]  "
        >
          {" "}
          <span> View all incoming deals</span>{" "}
          <ChevronRight className="w-[16px] text-[#0061FE]" />{" "}
        </Link>
      </div>
      <SyndicateTable />
    </div>
  );
};

export default SyndicateRegistrations;
    