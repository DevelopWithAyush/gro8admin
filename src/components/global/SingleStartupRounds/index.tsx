import React from 'react'
import PledgeTable from './PledgeTable'
import type { Pledge } from '@/store/features/dashboardApi'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface Props {
  pledges?: Pledge[];
  isLoading?: boolean;
  error?: FetchBaseQueryError | SerializedError | null;
}

const SingleStartupRounds: React.FC<Props> = ({ pledges, isLoading, error }) => {
  return (
    <div className='w-full px-[18px] py-[20px] bg-[#FFF] rounded-[12px]'>
      <PledgeTable pledges={pledges} isLoading={isLoading} error={error} />
    </div>
  )
}

export default SingleStartupRounds
