"use client";
import { usePaths } from "@/hooks/user-nav";
import { cn } from "@/lib/utils";
import { useUpdateSyndicateStatusMutation } from "@/store/features/dashboardApi";
import { useMemo, useState } from "react";
import RejectModal from "./RejectModal";
import SetApprovalStatus from "./SetApprovalStatus";


const SyndicateApprovalStatus = ({ approvalStatus, setApprovalStatus }: { approvalStatus: string, setApprovalStatus: React.Dispatch<React.SetStateAction<string>> }) => {
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [relatedDocuments, setRelatedDocuments] = useState<File | null>(null);
  const [relatedDocumentsKey, setRelatedDocumentsKey] = useState<{ keyId: string }[]>([{
    keyId: ""
  }]);
  const [reason, setReason] = useState<string>("");
  const [enterText, setEnterText] = useState<string>("");


  const { pathname } = usePaths()

  const paths = useMemo(() => pathname.split("/"), [pathname]);






  
  const [updateSyndicateStatus] = useUpdateSyndicateStatusMutation();

  const handleUpdateProfileStatus = async ({ status }: { status: string }) => {
    try {
      const response = await updateSyndicateStatus({
        id: paths[paths.length - 1],
        status: status,
        reason,
        description: enterText,
        documents: relatedDocumentsKey
      });
      console.log(response);
      setIsRejectModalOpen(false);
    } catch (error) {
      console.error("Error updating syndicate status:", error);
    }
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
        handleUpdateProfileStatus={() => handleUpdateProfileStatus({ status: "APPROVED" })}
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
          handleUpdateProfileStatus={() => handleUpdateProfileStatus({ status: "REJECTED" })}
          setRelatedDocumentsKey={setRelatedDocumentsKey}
          setIsRejectModalOpen={setIsRejectModalOpen}
        />
      )}
    </div>
  );
};

export default SyndicateApprovalStatus;
