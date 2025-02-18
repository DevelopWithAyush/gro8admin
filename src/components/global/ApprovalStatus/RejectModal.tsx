import axios from 'axios';
import React from 'react'
import { FaXmark } from 'react-icons/fa6';
import { MdOutlineFileUpload } from 'react-icons/md';

const RejectModal = ({ relatedDocuments, setRelatedDocuments, setApprovalStatus, reason, setReason, enterText, setEnterText, handleUpdateProfileStatus, setRelatedDocumentsKey, setIsRejectModalOpen }: { relatedDocuments: File | null, setRelatedDocuments: (file: File | null) => void, setApprovalStatus: (status: string) => void, reason: string, setReason: (reason: string) => void, enterText: string, setEnterText: (text: string) => void, handleUpdateProfileStatus: () => void, setRelatedDocumentsKey: (key: { keyId: string }[]) => void, setIsRejectModalOpen: (open: boolean) => void }) => {
    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/20 z-[100]"></div>
            <div className="fixed z-[110]
         top-1/2
          left-1/2
           -translate-x-1/2
           -translate-y-1/2
           bg-[#FFF]
           px-[32px]
           py-[24px]
           rounded-[12px]
           border
           border-solid
           border-[#E8E8F1]
           flex
           flex-col
           items-start
           justify-start
           gap-2
           
           ">

                <FaXmark className="self-end cursor-pointer" onClick={() => {
                    setIsRejectModalOpen(false)
                    setApprovalStatus("pending")
                    setReason("")
                    setEnterText("")
                    setRelatedDocuments(null)
                    setRelatedDocumentsKey([{ keyId: "" }])
                }} />
                <p className="text-[20px] text-[#000] font-rubik-regular_400">Enter Reason</p>
                <input value={reason} onChange={(e) => { setReason(e.target.value) }} type="text" placeholder="Select Reason" className="py-[15px] 
          px-[10px]
          outline-none
          border
          border-solid
          border-[#D9D9E4]
          placeholder:text-[#000]
          placeholder:text-[16px]
          font-rubik-light_300
          min-w-[600px]
           " />
                <textarea value={enterText} onChange={(e) => { setEnterText(e.target.value) }} placeholder="Enter Text" className="py-[15px] 
          px-[10px]
          outline-none
          border
          border-solid
          border-[#D9D9E4]
          placeholder:text-[#000]
          placeholder:text-[16px]
          font-rubik-light_300
          min-w-[600px]
           " />


                <div className="flex flex-row items-center justify-between w-full">



                    <div className="bg-[#D9D9E4] p-[10px]">
                        <label htmlFor="file" className="cursor-pointer text-[16px] font-rubik-regular_400   ">
                            <input
                                type="file"
                                id="file"
                                className="hidden"
                                onChange={async (e) => {
                                    if (e.target.files && e.target.files[0]) {
                                        setRelatedDocuments(e.target.files[0]);
                                        try {
                                            const authToken = localStorage.getItem("authToken");
                                            const formData = new FormData();
                                            formData.append("file", e.target.files[0]);

                                            const res = await axios.post(
                                                `${process.env.NEXT_PUBLIC_SERVER_URL}/bucket/file/private`,
                                                formData,
                                                {
                                                    headers: {
                                                        Authorization: `Bearer ${authToken}`,
                                                        "Content-Type": "multipart/form-data",
                                                    },
                                                }
                                            );

                                            const keyId = res.data.key;

                                            setRelatedDocumentsKey([{ keyId: keyId }]);
                                        } catch (error) {
                                            console.error("Error uploading file:", error);
                                        }
                                    } else {
                                        setRelatedDocuments(null);
                                    }
                                }}
                            />
                            {relatedDocuments ? <p>{relatedDocuments.name}
                            </p> : <p className="flex flex-row items-center justify-start gap-[10px]"> Upload Related Document <MdOutlineFileUpload className="text-[#0061FE] text-[24px]" /></p>}


                        </label>
                    </div>
                    <button onClick={handleUpdateProfileStatus} className="bg-[#194489] 
            text-[#FFF]
            px-[15px]
            py-[11px]
            rounded-[8px]
            font-urbanist-semibold_600
            text-[14px]
            leading-normal">
                        Confirm
                    </button>
                </div>

            </div>
        </>
    )
}

export default RejectModal
