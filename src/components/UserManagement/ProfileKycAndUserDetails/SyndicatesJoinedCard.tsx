import { ChevronRight } from 'lucide-react'
import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const SyndicatesJoinedCard = () => {
  return (
      <div className=" p-5 col-span-1 flex flex-col items-start justify-normal gap-3 border-solid border-[1px] border-[#E8E8F1] rounded-[12px]  ">
          <div className="flex flex-row items-start justify-normal gap-[10px]">
              <div className="w-[80px] aspect-square h-[80px] bg-pink-500 "></div>
              <div className="flex flex-col items-start justify-start gap-[1px]">
                  <p className="text-[#383838] text-[20px] font-urbanist-regular_400 leading-[110%]">
                      91 Ventures
                  </p>
                  <p className="text-[#838D96] text-[12px] font-urbanist-light_300 leading-[110%]">
                      91 Ventures
                  </p>
                  <p className="text-[#838D96] text-[12px] font-rubik-light_300 flex flex-row items-center justify-start gap-1 mt-[3px] leading-[110%]">
                      <FaLocationDot /> Bangalore, India
                  </p>
              </div>
          </div>
          <p className="text-[14px] text-[#383838] font-rubik-regular_400 leading-[110%]">
              91 Ventures aims to support, provide and innovate with startups creating
              technological innovations.
          </p>
          <div className="w-full flex flex-row  justify-between  ">
              <div className=" flex flex-col items-start justify-center ">
                  <p className="text-[12px] text-[#838D96] font-rubik-light_300 leading-[110%] ">
                      Region
                  </p>
                  <p className="text-[14px] text-[#000] font-rubik-regular_400 leading-[110%] ">
                      Karnataka
                  </p>
              </div>
              <div className="w-[1px] h-full bg-black/20" />

              <div className=" flex flex-col items-start justify-center ">
                  <p className="text-[12px] text-[#838D96] font-rubik-light_300 leading-[110%] ">
                      Deals invested in
                  </p>
                  <p className="text-[14px] text-[#000] font-rubik-regular_400 leading-[110%] ">
                      100
                  </p>
              </div>
          </div>
          <button className="flex flex-row items-center justify-start gap-2 self-end text-[#383838] font-urbanist-semibold_600 text-[14px] leading-[110%]">
              View syndicate <ChevronRight className="w-[16px] text-[#0061FE]" />
          </button>
      </div>
  )
}

export default SyndicatesJoinedCard
