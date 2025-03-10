// import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination'
// import React from 'react'


// const InvestorManagement = () => {
//   return (
//       <div className="p-5 bg-[#FFF] flex flex-col items-start justify-start gap-3 border border-solid border-[#E8E8F1] rounded-[12px] w-full">
//           <div className="flex flex-row items-center justify-between w-full">
//               <p className="text-[#26252F] font-urbanist-regular_400 leading-[110%] text-[25px]">
//                   Investor Registrations
//               </p>
//               {isInvestorList ? (
//                   <></>
//               ) : (
//                   <Link
//                       href="/dashboard/investor/registrations"
//                       className="px-[15px] py-[11px] text-[#000] font-urbanist-semibold_600 text-[16px] flex flex-row capitalize gap-[10px]"
//                   >
//                       <span>view all Investor</span>
//                       <ChevronRight className="w-[16px] text-[#0061FE]" />
//                   </Link>
//               )}
//           </div>
//           {isLoading ? (
//               <InvestroTableLoader />
//           ) : investorError ? (
//               <div className="w-full p-4 text-center text-red-500">
//                   {getErrorMessage(investorError)}
//               </div>
//           ) : (
//               <InvestorTable data={investorResponse?.data || []} />
//           )}
//           {isInvestorList ? (
//               <Pagination>
//                   <PaginationContent>
//                       <PaginationItem>
//                           <PaginationPrevious href="#" />
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationLink href="#">1</PaginationLink>
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationLink href="#" isActive>
//                               2
//                           </PaginationLink>
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationLink href="#">3</PaginationLink>
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationEllipsis />
//                       </PaginationItem>
//                       <PaginationItem>
//                           <PaginationNext href="#" />
//                       </PaginationItem>
//                   </PaginationContent>
//               </Pagination>
//           ) : (
//               <></>
//           )}
//       </div>
//   )
// }

// export default InvestorManagement