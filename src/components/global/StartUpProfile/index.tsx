import Image from "next/image";
import Profile from "./Profile";

const StartUpProfile = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-2">
      <div className="pb-5 pt-[109px] px-5 relative w-full border border-solid border-[#E8E8F1] overflow-hidden rounded-[12px] bg-[#FFF] ">
        <div className="absolute top-0 left-0 w-full h-[189px]">


          <Image
            src="/images/cardBackground.png"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-[140px] h-[140px] rounded-[4px] overflow-hidden relative bg-green-400"></div>
        <div className="flex flex-row items-center justify-between mt-5">
          <div>
            <h1 className="text-[31px] font-urbanist-semibold_600 text-[#383838] leading-[110%]">
              Name
            </h1>
            <p className="text-[#838D96] text-[12px] font-rubik-light_300 leading-[110%]">
              Tourism & Travels
            </p>
            <p className="text-[#383838] text-[12px] font-rubik-regular_400 leading-[110%] max-w-[395px] mt-[8px]">
              We are a fintech company aiming to create a simplified experience
              for institutional transactions
            </p>
          </div>
          <div className="flex flex-col items-end justify-end gap-5">
            <div className=" flex flex-col items-end justify-center ">
              <p className="text-[#838D96] font-rubik-light_300 text-[12px] leading-[110%]">
                Interested Amount
              </p>
              <p className="text-[#383838] font-rubik-regular_400 text-[14px] leading-normal">
                ₹ 50 Cr
              </p>
            </div>
            <div className=" flex flex-col items-end justify-center ">
              <p className="text-[#838D96] font-rubik-light_300 text-[12px] leading-[110%]">
                Round Type
              </p>
              <p className="text-[#383838] font-rubik-regular_400 text-[14px] leading-normal">
                Pre-seed
              </p>
            </div>
          </div>
        </div>
      </div>
      <Profile />
    </div>
  );
};

export default StartUpProfile;
