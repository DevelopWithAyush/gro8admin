import { ExternalLink } from 'lucide-react'
import React from 'react'

const Profile = ({ corporateOffice, marketType, website }: { corporateOffice: string, marketType: string, website: string }) => {
  return (
      <div className="p-5 w-full border border-solid border-[#E8E8F1] overflow-hidden rounded-[12px] bg-[#FFF] flex flex-col items-start justify-start gap-[12px] ">
          <p className="text-[#26252F] font-urbanist-regular_400 text-[25px] leading-[110%] ">
              Startup Profile
          </p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-x-5 gap-y-5">
              <div className=" col-span-1 flex flex-col items-start justify-start gap-1 ">
                  <p className="text-[#696971] font-rubik-light_300 text-[12px] leading-[110%]">
                      Interested Amount
                  </p>
                  <p className="text-[#000] font-rubik-regular_400 text-[16px] leading-normal">
                      ₹ 50 Cr
                  </p>
              </div>
              <div className=" col-span-1 flex flex-col items-start justify-start gap-1 ">
                  <p className="text-[#696971] font-rubik-light_300 text-[12px] leading-[110%]">
                      Corporate Office
                  </p>
                  <p className="text-[#000] font-rubik-regular_400 text-[16px] leading-normal">
                    {corporateOffice}
                  </p>
              </div>
              <div className=" col-span-1 flex flex-col items-start justify-start gap-1 ">
                  <p className="text-[#696971] font-rubik-light_300 text-[12px] leading-[110%]">
                      Market Type
                  </p>
                  <p className="text-[#000] font-rubik-regular_400 text-[16px] leading-normal">
                     {marketType}
                  </p>
              </div>
              <div className=" col-span-1 flex flex-col items-start justify-start gap-1 ">
                  <p className="text-[#696971] font-rubik-light_300 text-[12px] leading-[110%]">
                      Website
                  </p>
                  <a
                      href={website}
                      target="_blank"
                      className="text-[#000] font-rubik-regular_400 text-[16px] leading-normal flex flex-row items-center justify-start gap-1"
                  >
                      { website}{" "}
                      <ExternalLink className="w-[16px] text-[#0061FE]" />
                  </a>
              </div>
          </div>
      </div>
  )
}

export default Profile
