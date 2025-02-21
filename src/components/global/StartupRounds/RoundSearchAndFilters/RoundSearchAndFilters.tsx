"use client"
import { Search } from 'lucide-react'
import React, { useState } from 'react'
import StatusFilter from './StatusFilter'

import StatusShowCard from './StatusShowCard'
import FundTypeFilter from './FundTypeFilter'

enum Status {
  OPPORTUNITY = 'OPPORTUNITY',
  APPROVED = 'APPROVED',
  WIP = 'WIP',
  DROPPED = 'DROPPED'
}
const RoundSearchAndFilters = () => {

    const [fundType, setFundType] = useState<string | null>(null);
    const [status, setStatus] = useState<string | null>(null);
    return (
        <div className='flex flex-row items-center justify-between w-full'>
            <div className='flex flex-row  items-center justify-start gap-[10px]'>
                <div className="flex flex-row items-center bg-[#FFF] rounded-[8px] py-[5px] px-[10px] border border-solid border-[#D9D9E4]  ">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent text-[16px] font-rubik-light_300 text-[#57575F] leading-[20px] outline-none min-w-[200px]    "
                    />
                    <Search className="w-[16px] text-[#57575F]" />
                </div>
                <FundTypeFilter setActions={setFundType} actions={fundType} />
                <StatusFilter setActions={setStatus} actions={status} />
            </div>
            <div className='flex flex-row items-center justify-start gap-[15px]'>
                <StatusShowCard status={Status.OPPORTUNITY} />
                <StatusShowCard status={Status.APPROVED} /> 
                <StatusShowCard status={Status.WIP} />
                <StatusShowCard status={Status.DROPPED} />
            </div>
        </div>
    )
}

export default RoundSearchAndFilters
