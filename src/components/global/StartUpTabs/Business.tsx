import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import React from "react";
import DetailCard from "./DetailCard";

interface BusinessData {
  gstinNo: string;
  sebiDraftOfferDocNo: string;
  productServiceDesc: string;
  elevatorPitch: string;
  productVideoShowcase: {
    imageUri: string;
  };
  productImages: {
    imageUri: string;
  };
  businessModelDesc: string;
  problemBusinessSolves: string;
  competetors: string;
  whatMakesProductStandout: string;
  existingFunding: string;
  targetCustomersBasedIn: number[];
  typesOfSales: number[];
  categories: number[];
  maturityDesc: string;
  keyClients: string;
}

const Business = ({ data }: { data?: BusinessData }) => {
  return (
    <div className="w-full">
      <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-7  ">
        <DetailCard title="GSTIN Number" description={data?.gstinNo || 'N/A'} />
        <DetailCard
          title="SEBI Draft offer document number"
          description={data?.sebiDraftOfferDocNo || 'N/A'}
        />
        <DetailCard
          title="Product/Service description"
          colSpan2={true}
          description={data?.productServiceDesc || 'N/A'}
        />
        <DetailCard
          title="Elevator pitch"
          colSpan2={true}
          description={data?.elevatorPitch || 'N/A'}
        />

        <div className={cn(" col-span-1 w-full flex flex-col items-start justify-start gap-1")}>
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Upload product/Service video showcase
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
            {data?.productVideoShowcase?.imageUri ? (
              <>
                Product Video <ExternalLink className="w-[16px] text-[#0061FE]" />
              </>
            ) : (
              'N/A'
            )}
          </p>
        </div>
        <div className={cn(" col-span-1 w-full flex flex-col items-start justify-start gap-1")}>
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Upload product/Service images
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
            {data?.productImages?.imageUri ? (
              <>
                Service Image <ExternalLink className="w-[16px] text-[#0061FE]" />
              </>
            ) : (
              'N/A'
            )}
          </p>
        </div>
        <DetailCard
          title="Describe the business model"
          colSpan2={true}
          description={data?.businessModelDesc || 'N/A'}
        />
        <DetailCard
          title="What problem does the product/service solve?"
          colSpan2={true}
          description={data?.problemBusinessSolves || 'N/A'}
        />
        <DetailCard
          title="List the competitors of the startup"
          colSpan2={true}
          description={data?.competetors || 'N/A'}
        />
        <DetailCard
          title="What makes the product/service stand out from the competitors"
          colSpan2={true}
          description={data?.whatMakesProductStandout || 'N/A'}
        />
        <DetailCard
          title="Does the company have an already existing outside funding?"
          colSpan2={true}
          description={data?.existingFunding || 'N/A'}
        />

        <div className={cn(" col-span-2 w-full flex flex-col items-start justify-start gap-1")}>
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Target Customer Regions
          </p>
          <div className="flex flex-row gap-x-2">
            {data?.targetCustomersBasedIn?.map((region, index) => (
              <p
                key={index}
                className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap"
              >
                Region {region}
              </p>
            )) || 'N/A'}
          </div>
        </div>

        <div className={cn(" col-span-2 w-full flex flex-col items-start justify-start gap-1")}>
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Type of Service
          </p>
          <div className="flex flex-row gap-x-2">
            {data?.typesOfSales?.map((type, index) => (
              <p
                key={index}
                className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap"
              >
                Service Type {type}
              </p>
            )) || 'N/A'}
          </div>
        </div>

        <div className={cn(" col-span-2 w-full flex flex-col items-start justify-start gap-1")}>
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Business Model Of the Company
          </p>
          <div className="flex flex-row gap-x-2">
            {data?.categories?.map((category, index) => (
              <p
                key={index}
                className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap"
              >
                Category {category}
              </p>
            )) || 'N/A'}
          </div>
        </div>

        <DetailCard
          title="Describe the maturity of your business model"
          colSpan2={true}
          description={data?.maturityDesc || 'N/A'}
        />
        <DetailCard
          title="Who are your key clients?"
          colSpan2={true}
          description={data?.keyClients || 'N/A'}
        />
      </div>
    </div>
  );
};

export default Business;
