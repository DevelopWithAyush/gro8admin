import Image from "next/image";
import Profile from "./Profile";

const SyndicateProfile = () => {
    return (
        <div className="w-full flex flex-col items-start justify-start gap-2">
            <div className="pb-5 pt-[109px] px-5 relative w-full border border-solid border-[#E8E8F1] overflow-hidden rounded-[12px] bg-[#FFF] ">
                <div className="absolute top-0 left-0 w-full h-[189px]">
                    <Image
                        src={"/images/cardBackground.png"}
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
                            Scientific investment
                        </p>
                        <p className="text-[#383838] text-[12px] font-rubik-regular_400 leading-[110%] max-w-[395px] mt-[8px]">
                            Syndicate A aims to invest in fintech platforms that can create a difference in our modern age
                        </p>
                    </div>
                  
                </div>
            </div>
            <Profile />
        </div>
    );
};

export default SyndicateProfile;
