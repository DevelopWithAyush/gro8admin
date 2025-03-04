import React from "react";
import SyndicateDetailCard from "./SyndicateDetailCard";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { SyndicateMetadata } from '@/store/features/dashboardApi';

const PrimaryDetails = ({ data }: { data?: SyndicateMetadata }) => {
    const primaryDetails = data?.profile?.primaryDetails;

    return (
        <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-5 ">
            <SyndicateDetailCard title="Syndicate name *" description={primaryDetails?.syndicateName || "Enter name"} />
            <SyndicateDetailCard
                title="Type of investments offered *"
                description={primaryDetails?.typeOfInvestmentsOffered?.join(", ") || "Select options"}
            />
            <SyndicateDetailCard title="Name of owner *" description={primaryDetails?.ownerName || "Enter name"} />
            <SyndicateDetailCard title="Website *" description={primaryDetails?.website || "Website"} />
            <SyndicateDetailCard title="Country *" description={primaryDetails?.country || "Country"} />
            <SyndicateDetailCard title="State *" description={primaryDetails?.state || "State"} />
            <SyndicateDetailCard title="City *" description={primaryDetails?.city || "City"} />
            <SyndicateDetailCard title="Pincode *" description={primaryDetails?.pincode || "Pincode"} />
            <SyndicateDetailCard
                title="Round beginning date *"
                description={primaryDetails?.roundBeginningDate || "Round beginning date"}
            />
            <SyndicateDetailCard
                title="Round end date *"
                description={primaryDetails?.roundEndDate || "Round end date"}
            />
            <SyndicateDetailCard
                title="Investment Transaction Type  *"
                description={primaryDetails?.investmentTransactionType || "Investment Transaction Type"}
            />
            <SyndicateDetailCard
                title="Instrument used for investment *"
                description={primaryDetails?.instrumentUsed || "Instrument used for investment"}
            />
            <SyndicateDetailCard
                title=" Current Investment round   *"
                description={primaryDetails?.currentInvestmentRound || "Current Investment round"}
            />
            <SyndicateDetailCard title="Round Size " description={String(primaryDetails?.roundSize) || "Selected Size"} />
            <SyndicateDetailCard title="Valuation" description={String(primaryDetails?.valuation) || "Valuation"} />
            <SyndicateDetailCard
                title="Minimum investment amount "
                description={String(primaryDetails?.minimumInvestmentAmount) || "Minimum investment amount"}
            />
            <FileDetails title="Upload Syndicate Terms & Agreements doc *" fileName={primaryDetails?.syndicateTNA?.imageUri || "Terms and Agreements.pdf"} />
            <FileDetails title="Upload Pro-Rata Rights document *" fileName={primaryDetails?.syndicatePRRights?.imageUri || "Proratadocumentation.pdf"} />
            <FileDetails title="Upload Memo Details *" fileName={primaryDetails?.syndicateMemo?.imageUri || "momdetails.pdf"} />
            <FileDetails title="Upload Risks and Disclosure document *" fileName={primaryDetails?.syndicateRND?.imageUri || "Risksanddisclosure.pdf"} />
        </div>
    );
};

const FileDetails = ({ title, fileName }: {
    title: string,
    fileName: string
}) => {
    return (
        <div
            className={cn(
                " col-span-1 w-full flex flex-col items-start justify-start gap-1"
            )}
        >
            <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%] line-clamp-1">
                {title}
            </p>
            <p className="text-[#151517] w-full text-[16px] font-rubik-regular_400 leading-5 p-[10px] line-clamp-1 bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
                <p className="line-clamp-1 w-full ">{fileName}</p>
                <ExternalLink className="w-[16px] text-[#0061FE]" />
            </p>
        </div>
    )
}

export default PrimaryDetails;