"use client";
import { cn } from "@/lib/utils";
import { useUpdateDealStatusMutation } from "@/store/features/dashboardApi";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import RejectModal from "./RejectModal";
import SetApprovalStatus from "./SetApprovalStatus";

const DealApprovalStatus = ({ approvalStatus, setApprovalStatus }: { approvalStatus: string, setApprovalStatus: React.Dispatch<React.SetStateAction<string>> }) => {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [relatedDocuments, setRelatedDocuments] = useState<File | null>(null);
  const [relatedDocumentsKey, setRelatedDocumentsKey] = useState<{ keyId: string }[]>([{
    keyId: ""
  }]);
  const [reason, setReason] = useState<string>("");
  const [enterText, setEnterText] = useState<string>("");


  const searchParams = useSearchParams();
  const dealId = searchParams.get('dealId') || "";
  

  const [updateDealStatus] = useUpdateDealStatusMutation();

  const handleUpdateDealStatus = async ({ status }: { status: string }) => {
    const response = await updateDealStatus({
      id: dealId,
      status,
      reason,
      description: enterText,
      documents: [relatedDocumentsKey[0]]
    });
    console.log(response);
    setIsRejectModalOpen(false);
  }

  return (
    <div className="w-full bg-[#FFF] p-5 flex flex-col items-start justify-start  rounded-[12px] border border-solid border-[#E8E8F1] ">
      <p className=" capitalize text-[25px] text-[#26252F] font-rubik-regular_400 leading-normal ">
        Approval status
      </p>
      <p
        className={cn(
          "px-2 py-[1px] flex flex-col items-center justify-center capitalize text-[16px] leading-5 font-rubik-medium_500 rounded-[8px] mt-[10px] text-[#FFF]",
          approvalStatus === "approved" ? "bg-[#33ff88] " : "",
          approvalStatus === "rejected" ? "bg-[#ff3340] " : "",
          approvalStatus === "pending" ? "bg-[#E3BC32] " : "",
          approvalStatus === null ? "bg-[#ffffff] " : ""
        )}
      >
        {approvalStatus}
      </p>
      <p className="text-[#000] text-[20px] font-rubik-regular_400 leading-normal capitalize mt-[10px] ">
        set approval status{" "}
      </p>
      <SetApprovalStatus
        setApprovalStatus={setApprovalStatus}
        approvalStatus={approvalStatus}
        handleUpdateProfileStatus={() => handleUpdateDealStatus({ status: "APPROVED" })}
        setIsRejectModalOpen={setIsRejectModalOpen}
      />
      {approvalStatus === "rejected" && isRejectModalOpen && (
        <RejectModal
          relatedDocuments={relatedDocuments}
          setRelatedDocuments={setRelatedDocuments}
          reason={reason}
          setReason={setReason}
          enterText={enterText}
          setEnterText={setEnterText}
          setApprovalStatus={setApprovalStatus}
          handleUpdateProfileStatus={() => handleUpdateDealStatus({ status: "REJECTED" })}
          setRelatedDocumentsKey={setRelatedDocumentsKey}
          setIsRejectModalOpen={setIsRejectModalOpen}
        />
      )}
    </div>
  );
};

export default DealApprovalStatus;
