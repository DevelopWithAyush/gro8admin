import { cn } from '@/lib/utils'
import React from 'react'

enum Status {
    OPPORTUNITY = 'OPPORTUNITY',
    APPROVED = 'APPROVED',
    WIP = 'WIP',
    DROPPED = 'DROPPED'
}
interface StatusDetailsCardProps {
    status: Status
    totalPledges: number
    netAmount: number
}

    const StatusDetailsCard = ({ status, totalPledges, netAmount }: StatusDetailsCardProps) => {
    return (
        <div className='flex flex-row items-center justify-start gap-[3px] '>
            <div className={cn('w-[10px] h-[10px] rounded-full',
                status === Status.OPPORTUNITY && 'bg-[#8489F5]',
                status === Status.APPROVED && 'bg-[#67F286]',
                status === Status.WIP && 'bg-[#F58489]',
                status === Status.DROPPED && 'bg-[#F26767]',
            )}></div>

            <p className='text-[12px] font-rubik-regular_400  '>{totalPledges}</p>
            <div className='w-[1px] h-[12px] bg-black' />
            <p className='text-[12px] font-rubik-light_300 '>₹{netAmount}</p>

        </div>
    )
}

export default StatusDetailsCard
