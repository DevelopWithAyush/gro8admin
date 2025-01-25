import React from "react";
import SyndicateDetailCard from "./SyndicateDetailCard";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const PrimaryDetails = () => {
  return (
    <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-5 ">
          <SyndicateDetailCard title={"Syndicate name *"} description={"Enter name"} />
          <SyndicateDetailCard
              title={"Type of investments offered * *"}
              description={"Select options"}
          />
          <SyndicateDetailCard title={"Name of owner *"} description={"Enter name"} />
          <SyndicateDetailCard title={"Website *"} description={"Website"} />
          <SyndicateDetailCard title={"Country *"} description={"country"} />
          <SyndicateDetailCard title={"State *"} description={"State"} />
          <SyndicateDetailCard title={"City  *"} description={"City"} />
          <SyndicateDetailCard title={"Pincode *"} description={"Pincode"} />
          <SyndicateDetailCard
              title={"Round beginning date *"}
              description={"Round beginning date"}
          />
          <SyndicateDetailCard
              title={"Round end date *"}
              description={"Round end date"}
          />
          <SyndicateDetailCard
              title={"Investment Transaction Type  *"}
              description={"Investment Transaction Type"}
          />
          <SyndicateDetailCard
              title={"Instrument used for investment *"}
              description={"Instrument used for investment"}
          />
          <SyndicateDetailCard
              title={" Current Investment round   *"}
              description={"Current Investment round"}
          />
          <SyndicateDetailCard title={"Round Size "} description={"Selected Size"} />
          <SyndicateDetailCard title={"Valuation"} description={"Valuation"} />
          <SyndicateDetailCard
              title={"Minimum investment amount "}
              description={"Minimum investment amount"}
          />
          <FileDetils title="Upload Syndicate Terms & Agreements doc *" fileName="Terms and Agreements.pdf"/>
          <FileDetils title="Upload Pro-Rata Rights document *" fileName="Proratadocumentation.pdf"/>
          <FileDetils title="Upload Memo Details *" fileName="momdetails.pdf"/>
          <FileDetils title="Upload Risks and Disclosure document *" fileName="Risksanddisclosure.pdf"/>


     
         

    </div>
  );
};

export default PrimaryDetails;



const FileDetils = ({title,fileName}:{
    title:string,
    fileName:string
}) => {
    return (
        <div
            className={cn(
                " col-span-1 w-full flex flex-col items-start justify-start gap-1"
            )}
        >
            <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
              {title}
            </p>
            <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
               {fileName}
                <ExternalLink className="w-[16px] text-[#0061FE]" />
            </p>
        </div>
    )
}