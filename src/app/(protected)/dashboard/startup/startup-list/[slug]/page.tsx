import ApprovalStatus from '@/components/global/ApprovalStatus'
import StartUpProfile from '@/components/global/StartUpProfile'
import StartUpTabs from '@/components/global/StartUpTabs'
import StartUpTimeLine from '@/components/global/StartUpTimeLine'
import React from 'react'

const Page = () => {
  return (
      <div className='w-full grid grid-cols-12 gap-x-5 mt-[12px] '>
          <div className='col-span-8 w-full flex flex-col items-start justify-start gap-[29px]'>
              <StartUpProfile />
              <StartUpTabs/>
          </div>
          <div className='col-span-4 w-full flex flex-col items-start justify-start gap-y-[13.5px]'>
              <ApprovalStatus />
              <StartUpTimeLine/>
              
          </div>
      
    </div>
  )
}

export default Page
