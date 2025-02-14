import Image from "next/image";
import React from "react";
import UserProfile, { UserProfileData } from "./UserProfile";

interface UserProfileSectionProps {
  data: UserProfileData;
}

const UserInvestorProfileSection = ({ data }: UserProfileSectionProps) => {
  
  return (
    <div className="flex flex-col items-start justify-normal w-full gap-3">
      <div className="p-5 flex flex-row items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-[15px] ">
        <Image
          src={"/images/profile1.png"}
          width={140}
          height={140}
          alt="profile"
          className="w-[140px] h-[140px] object-cover"
        />
        <div className="flex flex-col items-start justify-start gap-2">
          <p className="text-[31px] font-urbanist-semibold_600 text-[#383838] leading-normal ">
            {data.profile.investorProfile.investorKyc.firstName} {data.profile.investorProfile.investorKyc.lastName}
          </p>
          <div className="flex flex-col items-start justify-start gap-[1px]">
            <p className="text-[12px] leading-normal text-[#838D96] font-rubik-light_300">
              Account Type
            </p>
            <p className="text-[14px] leading-normal text-[#383838] font-rubik-regular_400">
             {data?.role}
            </p>
          </div>
          <p className="text-[12px] leading-normal text-[#383838] font-rubik-regular_400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            corrupti consequuntur. Molestias.
          </p>
        </div>
      </div>
      <UserProfile data={data} />
    </div>
  );
};

export default UserInvestorProfileSection;
