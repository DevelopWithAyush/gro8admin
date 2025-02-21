import { cn } from '@/lib/utils'
import React from 'react'

enum Status {
  OPPORTUNITY = 'OPPORTUNITY',
  APPROVED = 'APPROVED',
  WIP = 'WIP',
  DROPPED = 'DROPPED'
}

interface StatusShowCardProps {
  status: Status
}

const StatusShowCard = ({ status }: StatusShowCardProps) => {
  return (
    <div className='flex flex-row items-center justify-start gap-[7px]'>
      <div className={cn('w-[7px] h-[7px] rounded-full ',
        status === Status.OPPORTUNITY && 'bg-[#8489F5]',
        status === Status.APPROVED && 'bg-[#67F286]',
        status === Status.WIP && 'bg-[#F58489]',
        status === Status.DROPPED && 'bg-[#F26767]',
      )}></div>
      <p className='text-[16px] font-rubik-regular_400 text-[#57575F] leading-[20px] capitalize'>{status.toLowerCase()}</p>

    </div>
  )
}

export default StatusShowCard
