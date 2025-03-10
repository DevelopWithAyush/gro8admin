import InvestorRegistrations from '@/components/global/InvestorRegistrations'
import SearchAndFilter from '@/components/global/SearchAndFilter'
import React from 'react'

const page = () => {
  return (
    <section className="flex flex-col items-start justify-start w-full gap-[33px] ">
      <SearchAndFilter />
      <InvestorRegistrations />
    </section>
  )
}

export default page
