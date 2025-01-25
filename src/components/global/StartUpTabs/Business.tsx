import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import React from "react";
import DetailCard from "./DetailCard";

const Business = () => {
  return (
    <div className="w-full">
      <div className="p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-7  ">
        <DetailCard title="GSTIN Number" description="Name" />
        <DetailCard
          title="SEBI Draft offer document number"
          description="Name"
        />
        <DetailCard
          title="Product/Service description"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <DetailCard
          title="Elevator pitch"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />

        <div
          className={cn(
            " col-span-1 w-full flex flex-col items-start justify-start gap-1"
          )}
        >
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Upload product/Service video showcase
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
            Product Video.mov{" "}
            <ExternalLink className="w-[16px] text-[#0061FE]" />
          </p>
        </div>
        <div
          className={cn(
            " col-span-1 w-full flex flex-col items-start justify-start gap-1"
          )}
        >
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Upload product/Service images
          </p>
          <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5 p-[10px] bg-[#D9D9E4] flex flex-row items-center justify-start gap-[10px] ">
            Service Image.png{" "}
            <ExternalLink className="w-[16px] text-[#0061FE]" />
          </p>
        </div>
        <DetailCard
          title="Describe the business model"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <DetailCard
          title="What problem does the product/service solve?"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <DetailCard
          title="List the competitors of the startup"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <DetailCard
          title="What makes the product/service stand out from the competitors"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <DetailCard
          title="Does the company have an already existing outside funding?"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <div
          className={cn(
            " col-span-2 w-full flex flex-col items-start justify-start gap-1"
          )}
        >
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Target Customer Regions
          </p>
          <div className="flex flex-row gap-x-2">
            {Array.from({ length: 2 }).map((_, index) => {
              return (
                <p
                  key={index} /* Always add a unique key when rendering lists */
                  className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap"
                >
                  Industry Type {index + 1}{" "}
                  {/* Add dynamic text if necessary */}
                </p>
              );
            })}
          </div>
        </div>
        <div
          className={cn(
            " col-span-2 w-full flex flex-col items-start justify-start gap-1"
          )}
        >
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Type of Service
          </p>
          <div className="flex flex-row gap-x-2">
            {Array.from({ length: 2 }).map((_, index) => {
              return (
                <p
                  key={index} /* Always add a unique key when rendering lists */
                  className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap"
                >
                  Industry Type {index + 1}{" "}
                  {/* Add dynamic text if necessary */}
                </p>
              );
            })}
          </div>
        </div>
        <div
          className={cn(
            " col-span-2 w-full flex flex-col items-start justify-start gap-1"
          )}
        >
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Business Model Of the Company
          </p>
          <div className="flex flex-row gap-x-2">
            {Array.from({ length: 2 }).map((_, index) => {
              return (
                <p
                  key={index} /* Always add a unique key when rendering lists */
                  className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF] whitespace-nowrap"
                >
                  Industry Type {index + 1}{" "}
                  {/* Add dynamic text if necessary */}
                </p>
              );
            })}
          </div>
        </div>

        <DetailCard
          title="Describe the maturity of your business model"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
        <DetailCard
          title="Who are your key clients?"
          colSpan2={true}
          description="Lorem ipsum dolor sit amet consectetur. Lacus pulvinar dui pharetra semper nisi commodo sagittis aliquam sollicitudin. Sit."
        />
      </div>
    </div>
  );
};

export default Business;
