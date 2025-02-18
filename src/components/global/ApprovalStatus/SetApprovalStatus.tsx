import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import React from "react";

interface SetApprovalStatusProps {
  approvalStatus: string;
  setApprovalStatus: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateProfileStatus: () => void;
  setIsRejectModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetApprovalStatus = ({ approvalStatus, setApprovalStatus, handleUpdateProfileStatus, setIsRejectModalOpen }: SetApprovalStatusProps) => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="w-full" asChild>
        <button
          className="flex 
                w-full
                flex-row
                items-center
                justify-between
                border
                border-[#D9D9E4]
                rounded-[8px]
                p-[10px]
                text-[16px]
                leading-5
                font-rubik-light_300
                bg-[#FFF]
                text-[#57575F]
                mt-2
                capitalize 
                focus:outline-none
                "
        >
          <span>{approvalStatus || "Set Approval Status"}</span>{" "}
          <ChevronDown className="w-[16px] text-[#57575F]" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-white shadow-lg rounded-lg border border-gray-200 mt-2 w-56 "
      // style={{
      //   width: "inherit",
      // }}
      >
        <DropdownMenuItem
          onClick={() => setApprovalStatus("pending")}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 capitalize hover:border-none hover:outline-none"
        >
          Pending
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setApprovalStatus("approved")
            handleUpdateProfileStatus()
          }}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 capitalize hover:border-none hover:outline-none"
        >
          Approved
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {


            setApprovalStatus("rejected")
            setIsRejectModalOpen(true)
          }
          }
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 capitalize hover:border-none hover:outline-none"
        >
          Rejected
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu >
  );
};

export default SetApprovalStatus;
