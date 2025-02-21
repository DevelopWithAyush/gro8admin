"use client"
import React from 'react'
import RoundSearchAndFilters from './RoundSearchAndFilters/RoundSearchAndFilters'
import StartupRoundsCard from './StartupRoundsCard'
import { useGetStartupRoundsQuery } from '@/store/features/dashboardApi'

const StartupRounds = () => {
    const { data, isLoading, error } = useGetStartupRoundsQuery({ page: 1, pageSize: 10 })

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error loading startup rounds</div>
    }

    return (
        <div className='flex flex-col items-start justify-start w-full gap-[42px] '>
            <RoundSearchAndFilters />
            <div className='w-full flex flex-col items-start min-h-[calc(100vh-220px)] justify-normal gap-[10px]'>
                {data?.data.map((round) => (
                    <StartupRoundsCard key={round.id} round={round} />
                ))}
            </div>
        </div>
    )
}

export default StartupRounds
