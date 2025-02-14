import React from 'react'
import DetailCard from './DetailCard'

interface GrantsAndFundingData {
  hasStartupReceivedGrantsOrFunding: number;
  schemeName: string;
  grantReceived: string;
  currency: string;
}

const GrantsAndFunding = ({ data }: { data?: GrantsAndFundingData }) => {
  return (
    <div className='p-5 grid grid-cols-2 items-start justify-normal border-[1px] border-solid border-[#E8E8F1] w-full bg-[#FFF] rounded-[12px] gap-x-5 gap-y-8'>
      <DetailCard
        title='Grant/Funding Type'
        colSpan2
        description={data?.hasStartupReceivedGrantsOrFunding === 1 ? 'Grant' : 'No Grant'}
      />
      <DetailCard
        title='Scheme Name'
        description={data?.schemeName || 'N/A'}
      />
      <DetailCard
        title='Grant Recieved'
        description={data?.grantReceived ? `${data.grantReceived} ${data.currency}` : 'N/A'}
      />
    </div>
  )
}

export default GrantsAndFunding
