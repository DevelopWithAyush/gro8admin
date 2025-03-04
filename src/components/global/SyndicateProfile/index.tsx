import Image from "next/image";
import Profile from "./Profile";
import { SyndicateMetadata } from '@/store/features/dashboardApi';

const SyndicateProfile = ({ data }: { data?: SyndicateMetadata }) => {
    const primaryDetails = data?.profile?.primaryDetails;

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
                            {primaryDetails?.syndicateName || 'Name'}
                        </h1>
                        <p className="text-[#838D96] text-[12px] font-rubik-light_300 leading-[110%]">
                            Scientific investment
                        </p>
                        <p className="text-[#383838] text-[12px] font-rubik-regular_400 leading-[110%] max-w-[395px] mt-[8px]" dangerouslySetInnerHTML={{ __html: data?.profile?.syndicateCoreDetails?.syndicateDescription ||
                            'Syndicate description'
                        }}>
                        </p>
                    </div>
                </div>
            </div>
            <Profile data={data} />
        </div>
    );
};

export default SyndicateProfile;
