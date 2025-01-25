import React from 'react'
import ProfileCard from './ProfileCard'

const InvestorDetails = () => {
  return (
      <div className='p-5 flex flex-col items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-y-7 '>
          <ProfileCard/>
          <ProfileCard/>
          <ProfileCard/>
    </div>
  )
}

export default InvestorDetails
