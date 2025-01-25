import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const InvestmentCard = () => {
    return (
        <div className="col-span-1 pt-[33px] pb-5 rounded-[12px] border-[1px] border-solid border-[#E8E8F1] relative  w-full  overflow-hidden pl-5 pr-1  ">
            <Image
                width={100}
                height={100}
                className="w-[100%] h-[92px] absolute top-0 left-0"
                alt=""
                src={"/images/cardBackground.png"}
            />
            <div className="relative w-[80px] aspect-square bg-black rounded-[4px]  ">
                f asfjasl;j{" "}
            </div>
            <div className="flex flex-row items-start justify-between mt-[15px]">
                <div className="flex flex-col items-start justify-normal">
                    <p className="text-[#383838] font-urbanist-regular_400 text-[20px] leading-normal">
                        Beka
                    </p>
                    <p className="text-[#838D96] text-[12px] font-rubik-light_300 leading-[110%]">
                        Beckham
                    </p>
                </div>
                <button className="flex flex-row items-center justify-start gap-2 text-[16px] font-urbanist-semibold_600 text-[#383838]">
                    View deal <ChevronRight className="w-[16px] text-[#0061FE]" />
                </button>
            </div>
            <p className="text-[#383838] text-[12px] font-rubik-regular_400 leading-[110%] mt-2 pr-1">
                We are a fintech company aiming to create a simplified experience for
                institutional transactions
            </p>
            <div className="w-full mt-[21px] flex flex-row items-center justify-between">
                <div className="flex flex-col  items-start justify-start gap-[1px] border-r-[1px] border-solid border-[#D1D1E2] pr-5">
                    <p className="text-[12px] font-rubik-light_300 leading-[110%] text-[#838D96] ">
                        Deal Syndicate
                    </p>
                    <p className="text-[12px] font-rubik-regular_400 text-[#000] leading-[110%] ">
                        Syndicate A
                    </p>
                </div>
                <div className="flex flex-col  items-start justify-start gap-[1px] border-r-[1px] border-solid border-[#D1D1E2] px-5">
                    <p className="text-[12px] font-rubik-light_300 leading-[110%] text-[#838D96] ">
                        Invested Amount
                    </p>
                    <p className="text-[12px] font-rubik-regular_400 text-[#000] leading-[110%] ">
                        ₹ 50 Cr
                    </p>
                </div>
                <div className="flex flex-col  items-start justify-start gap-[1px] px-5">
                    <p className="text-[12px] font-rubik-light_300 leading-[110%] text-[#838D96] ">
                        Round Type
                    </p>
                    <p className="text-[12px] font-rubik-regular_400 text-[#000] leading-[110%] ">
                        Pre-seed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InvestmentCard
