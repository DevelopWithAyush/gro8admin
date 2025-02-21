import Image from 'next/image'
import React from 'react'
import StatusShowCard from '../RoundSearchAndFilters/StatusShowCard'

enum Status {
  OPPORTUNITY = 'OPPORTUNITY',
  APPROVED = 'APPROVED',
  WIP = 'WIP',
  DROPPED = 'DROPPED'
}
const StartupRoundsCard = () => {
  return (
      <div className=' grid grid-cols-12 w-full   bg-[#F2F6FA] rounded-[9px] py-[10px] px-[15px] gap-[10px] ' >
          
          <div className='col-span-4   px-[6px] py-[5px] flex flex-col items-start justify-start gap-[14px] '>
              <div className='w-[40px] h-[40px] relative rounded-[4px] overflow-hidden'>
                <Image src={'/images/profile1.png'} alt='startup-rounds' fill className='object-cover' />
              </div>
              <p>MC.We(Pre-Series A | May ‘24)</p>
              <StatusShowCard status={Status.APPROVED}/>

          </div>
          <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
              <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>KYC Status</p>

              
          </div>
          <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
              <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>C.A. Status </p>
          </div>
          <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
              <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>Consent</p>
          </div>
          <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
              <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>Drawdown</p>
          </div>
      
    </div>
  )
}

export default StartupRoundsCard
