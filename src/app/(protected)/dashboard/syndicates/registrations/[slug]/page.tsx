"use client"

import SyndicateApprovalStatus from '@/components/global/SyndicateApprovalStatus'
import SyndicateProfile from '@/components/global/SyndicateProfile'
import SyndicateTabs from '@/components/global/SyndicateTabs'
import { useGetSyndicateMetadataQuery } from '@/store/features/dashboardApi'
import React, { useState } from 'react'

interface ClientPageProps {
    slug: string
}

const ClientPage: React.FC<ClientPageProps> = ({ slug }) => {
    const [approvalStatus, setApprovalStatus] = useState<string>("pending")
    const { data, isLoading, error } = useGetSyndicateMetadataQuery(slug)

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error loading syndicate data</div>

    return (
        <div className='w-full grid grid-cols-12 gap-x-5 mt-[12px] '>
            <div className='col-span-8 w-full flex flex-col items-start justify-start gap-[29px]'>
                <SyndicateProfile data={data} />
                <SyndicateTabs data={data} />
            </div>
            <div className='col-span-4 w-full flex flex-col items-start justify-start gap-y-[13.5px]'>
                <SyndicateApprovalStatus
                    approvalStatus={approvalStatus}
                    setApprovalStatus={setApprovalStatus}
                />
                {/* <SyndicateTimeLine /> */}

            </div>

        </div>
    )
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = React.use(params)
    return <ClientPage slug={resolvedParams.slug} />
}
