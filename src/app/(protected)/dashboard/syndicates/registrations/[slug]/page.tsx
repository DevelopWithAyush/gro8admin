import ApprovalStatus from '@/components/global/ApprovalStatus'
import SyndicateProfile from '@/components/global/SyndicateProfile'
import SyndicateTabs from '@/components/global/SyndicateTabs'

const Page = () => {
    return (
        <div className='w-full grid grid-cols-12 gap-x-5 mt-[12px] '>
            <div className='col-span-8 w-full flex flex-col items-start justify-start gap-[29px]'>
                <SyndicateProfile />
                <SyndicateTabs />
            </div>
            <div className='col-span-4 w-full flex flex-col items-start justify-start gap-y-[13.5px]'>
                <ApprovalStatus />
                {/* <SyndicateTimeLine /> */}

            </div>

        </div>
    )
}

export default Page
