'use client'
import SingleStartupRounds from '@/components/global/SingleStartupRounds'
import StartupRoundsDetails from '@/components/global/SingleStartupRounds/StartupRoundsDetails'
import { useGetStartupRoundPledgesQuery } from '@/store/features/dashboardApi'
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const params = useParams()
  const roundId = params.slug as string

  const { data: pledgesData, isLoading, error } = useGetStartupRoundPledgesQuery({
    roundId,
    page: 1,
    pageSize: 10
  })

  return (
    <main className='flex flex-col items-start justify-start w-full  gap-[13.5px] mt-[14px] '>
      <StartupRoundsDetails />
      <SingleStartupRounds pledges={pledgesData?.data} isLoading={isLoading} error={error} />
    </main>
  )
}

export default Page
