import React from 'react'
import RoundSearchAndFilters from './RoundSearchAndFilters/RoundSearchAndFilters'
import StartupRoundsCard from './StartupRoundsCard'
const StartupRounds = () => {
    return (
        <div className='flex flex-col items-start justify-start w-full gap-[42px] '>
            <RoundSearchAndFilters />
            <div className='w-full flex flex-col items-start justify-normal gap-[10px]  '>
                <StartupRoundsCard />
                <StartupRoundsCard />
            </div>

        </div>
    )
}

export default StartupRounds
