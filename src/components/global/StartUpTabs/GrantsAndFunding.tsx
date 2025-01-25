import React from 'react'
import DetailCard from './DetailCard'

const GrantsAndFunding = () => {
  return (
    <div className='p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-8'>
      <DetailCard title='Grant/Funding Type' colSpan2 description='Grant'/>
      <DetailCard title='Scheme Name' description='Name of scheme'/>
      <DetailCard title='Grant Recieved' description='$50000'/>
      
    </div>
  )
}

export default GrantsAndFunding
