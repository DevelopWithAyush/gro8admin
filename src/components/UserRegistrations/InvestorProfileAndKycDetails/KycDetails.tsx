import { Checkbox } from "@/components/ui/checkbox";
import { ExternalLink } from "lucide-react";
import React from "react";

export interface InvestorKyc {
  firstName: string;
  lastName: string;
  occupation: string;
  international: {
    dob: string;
    idDocument: {
      imageUri: string;
    };
    typeOfVerification: string;
    taxFormReview: {
      occupation: string;
      totalCommitmentOver5Years: number;
    };
    networthExceeds1M: boolean;
    avgIncomeOf200kFor2Years: boolean;
  };
}

export interface KycData {
  profile: {
    investorProfile: {
      investorKyc: InvestorKyc;
    };
  };
}

const KycDetails = ({ data }: { data: KycData }) => {
  const kyc = data.profile.investorProfile.investorKyc;

  return (
    <div className="w-full grid grid-cols-2 gap-x-4 gap-y-8">
      <p className="text-[#000] text-[25px] font-urbanist-semibold_600 leading-normal col-span-2">
        User Verification
      </p>
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          First name <span className="text-[#F12222]">*</span>
        </p>
        <p className="text-[#151517] text-[16px] flex flex-row items-center leading-[110%]">
          {kyc?.firstName}
        </p>
      </div>
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Last name <span className="text-[#F12222]">*</span>
        </p>
        <p className="text-[#151517] text-[16px] flex flex-row items-center leading-[110%]">
          {kyc?.lastName}
        </p>
      </div>
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Occupation <span className="text-[#F12222]">*</span>
        </p>
        <p className="text-[#151517] text-[16px] flex flex-row items-center leading-[110%]">
          {kyc?.occupation}
        </p>
      </div>
      <div className="col-span-1 flex flex-col">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Country <span className="text-[#F12222]">*</span>
        </p>
        <p className="text-[#151517] text-[16px] flex flex-row items-center leading-[110%]">
          {kyc?.international?.taxFormReview?.occupation}
        </p>
      </div>
      <div className="col-span-2 flex flex-col items-start justify-start gap-1">
        <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
          Upload ID document <span className="text-[#F12222]">*</span>
        </p>
        <div className="flex flex-row p-[10px] bg-[#D9D9E4] items-center justify-start gap-[10px]">
          <p>ID Document</p>
          <ExternalLink
            className="w-[16px] cursor-pointer"
            onClick={() => window.open(kyc.international.idDocument.imageUri, '_blank')}
          />
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-x-4 gap-y-5">
        <div className="col-span-2 flex flex-col items-start justify-start gap-[10px]">
          <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
            Verification Process used<span className="text-[#F12222]">*</span>
          </p>
          <p className="px-[9px] py-[7px] rounded-[16.5px] bg-[#757A94] text-[12px] font-rubik-regular_400 text-[#FFF]">
            {kyc?.international?.typeOfVerification}
          </p>
        </div>
        <div className="col-span-2 flex flex-row items-center justify-start gap-2">
          <Checkbox
            id="worth"
            checked={kyc?.international?.networthExceeds1M}
            disabled
          />
          <label htmlFor="worth">
            I confirm that my net worth exceeds (US)$1,000,000
          </label>
        </div>
        <div className="col-span-2 flex flex-row items-center justify-start gap-2">
          <Checkbox
            id="income"
            checked={kyc?.international?.avgIncomeOf200kFor2Years}
            disabled
          />
          <label htmlFor="income">
            I confirm that i have an average income of (US)$ 200,000 from the last two years.
          </label>
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
