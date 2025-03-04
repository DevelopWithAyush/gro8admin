import React from 'react'
import ProfileCard from './ProfileCard'
import { SyndicateMetadata } from '@/store/features/dashboardApi'

const InvestorDetails = ({ data }: { data?: SyndicateMetadata }) => {
  const investorDetails = data?.profile?.investorDetails || [];

  return (
    <div className='p-5 flex flex-col items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-y-7'>
      {investorDetails.map((investor, index) => (
        <ProfileCard key={index} investor={investor} />
      ))}
    </div>
  )
}

export default InvestorDetails
