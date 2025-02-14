"use client";
import ApprovalStatus from '@/components/global/ApprovalStatus'
import StartUpProfile from '@/components/global/StartUpProfile'
import StartUpTabs from '@/components/global/StartUpTabs'
import StartUpTimeLine from '@/components/global/StartUpTimeLine'
import { useGetStartupMetadataQuery } from '@/store/features/dashboardApi'
import React from 'react'

const Page = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, error } = useGetStartupMetadataQuery(params.slug);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading startup data</div>;

  const startupData = data?.profile?.founderProfile;

  return (
    <div className='w-full grid grid-cols-12 gap-x-5 mt-[12px] '>
      <div className='col-span-8 w-full flex flex-col items-start justify-start gap-[29px]'>
        <StartUpProfile  />
        <StartUpTabs
          startupDetails={startupData?.startupDetails}
          businessDetails={startupData?.businessDetails}
          teamDetails={startupData?.teamDetails}
          businessKpi={startupData?.businessKpi}
          grantsOrFunding={startupData?.grantsOrFunding}
          dealCuration={startupData?.dealCuration}
          acceleratorDetails={startupData?.acceleratorDetails}
        />
      </div>
      <div className='col-span-4 w-full flex flex-col items-start  justify-start gap-y-[13.5px]'>
        <ApprovalStatus />
        <StartUpTimeLine />
      </div>
    </div>
  )
}

export default Page
