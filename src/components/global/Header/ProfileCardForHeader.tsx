import { DownArrowIconForProfile } from "@/Icon/SvgIcon";
import Image from "next/image";

const ProfileCardForHeader = () => {
  return (
    <div className="flex flex-row items-center gap-[9px] py-[5px] px-[16px]">
      <div className="flex flex-col items-center justify-center overflow-hidden border border-solid border-[#6B9CECD] rounded-full px-[2px] w-auto h-auto ">
        <Image
          src={"/images/profile.png"}
          width={100}
          height={100}
          alt="profile"
          className="w-full object-fill h-full"
        />
      </div>
      <div className="flex flex-col items-start justify-start ">
        <p className="text-[#32363B] font-rubik-semibold_600 leading-[20px] text-[16px] ">
          Ayush Dubey
        </p>
        <p
          className="flex 
        flex-col
        items-center
        justify-center
        bg-[#44AD54]
        rounded-[8px]
        px-1 py-[1px]
         text-[#FEFEFE]
         text-[8px]
         font-bold
         "
        >
          Adminstrator
        </p>
      </div>
      <DownArrowIconForProfile />
    </div>
  );
};


export default ProfileCardForHeader;