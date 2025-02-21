import Image from 'next/image'
import React from 'react'

const StartupRoundsDetails = () => {
    return (
        <section className='flex flex-row  justify-between w-full p-[15px] pr-[20px] bg-[#FFF] rounded-[12px]  '>
            <div className='flex flex-row items-center justify-start  gap-[10px]'>
                <div className='rounded-[4px] border-solid border border-[#D1D1E2] w-[40px] h-[40px] relative overflow-hidden'>
                    <Image src={'/images/profile.png'} alt='startup-rounds' fill className='object-cover' />
                </div>
                <div className='flex flex-col  items-start justify-start'>
                    <p className='text-[#383838] text-[20px] font-rubik-regular_400 leading-normal'>Startup Name</p>
                    <p className='text-[#838D96] text-[10px] font-rubik-regular_400 leading-normal'>Startup Description</p>
                </div>
            </div>
            <div className='flex flex-row items-center justify-start  gap-5'>
                <div className='  '>
                    <p className='text-[#838D96] text-[12px] font-rubik-medium_500 leading-[16px]'>Join Date</p>
                    <p className='text-[#383838] text-[14px] font-rubik-medium_500 leading-[16px]'>01/01/2025</p>
                </div>
                <div className=' w-[1px] h-full bg-[#D1D1E2] ' />
                <div className='  '>
                    <p className='text-[#838D96] text-[12px] font-rubik-medium_500 leading-[16px]'>Number of active investors</p>
                    <p className='text-[#383838] text-[14px] font-rubik-medium_500 leading-[16px]'>01/01/2025</p>
                </div>
                <div className=' w-[1px] h-full bg-[#D1D1E2] ' />
                <div className='  '>
                    <p className='text-[#838D96] text-[12px] font-rubik-medium_500 leading-[16px]'>Total Amount Invested</p>
                    <p className='text-[#383838] text-[14px] font-rubik-medium_500 leading-[16px]'>01/01/2025</p>
                </div>

            </div>

        </section>
    )
}

export default StartupRoundsDetails
