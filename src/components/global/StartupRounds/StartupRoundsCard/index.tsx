import Image from 'next/image'
import React from 'react'
import StatusShowCard from '../RoundSearchAndFilters/StatusShowCard'
import StatusDetailsCard from './StatusDetailsCard'
import Link from 'next/link'

enum Status {
  OPPORTUNITY = 'OPPORTUNITY',
  APPROVED = 'APPROVED',
  WIP = 'WIP',
  DROPPED = 'DROPPED'
}

interface StartupRoundsCardProps {
  round: {
    id: string;
    startupName: string;
    name: string;
    expiry: string;
    avatar: string;
    pledges: {
      KYC_STATUS?: {
        OPPORTUNITY?: { netAmount: number; totalPledges: number };
        APPROVED?: { netAmount: number; totalPledges: number };
        WIP?: { netAmount: number; totalPledges: number };
        DROPPED?: { netAmount: number; totalPledges: number };
      };
      CONSENT?: {
        OPPORTUNITY?: { netAmount: number; totalPledges: number };
        APPROVED?: { netAmount: number; totalPledges: number };
        WIP?: { netAmount: number; totalPledges: number };
        DROPPED?: { netAmount: number; totalPledges: number };
      };
      CA_STATUS?: {
        OPPORTUNITY?: { netAmount: number; totalPledges: number };
        APPROVED?: { netAmount: number; totalPledges: number };
        WIP?: { netAmount: number; totalPledges: number };
        DROPPED?: { netAmount: number; totalPledges: number };
      };
      DRAWDOWN?: {
        OPPORTUNITY?: { netAmount: number; totalPledges: number };
        APPROVED?: { netAmount: number; totalPledges: number };
        WIP?: { netAmount: number; totalPledges: number };
        DROPPED?: { netAmount: number; totalPledges: number };
      };
    };
  }
}

const StartupRoundsCard = ({ round }: StartupRoundsCardProps) => {
  const renderStatusDetails = (categoryData?: {
    [K in Status]?: { netAmount: number; totalPledges: number }
  }) => {
    if (!categoryData) return null;

    return Object.entries(categoryData).map(([status, data]) => (
      data && <StatusDetailsCard
        key={status}
        status={status as Status}
        totalPledges={data.totalPledges}
        netAmount={data.netAmount}
      />
    ));
  };

  return (
    <Link href={"/dashboard/startup/startup-rounds/" + round.id}  className='grid grid-cols-12 w-full bg-[#F2F6FA] rounded-[9px] py-[10px] px-[15px] gap-[10px]'>
      <div className='col-span-4 px-[6px] py-[5px] flex flex-col items-start justify-start gap-[14px]'>
        <div className='w-[40px] h-[40px] relative rounded-[4px] overflow-hidden'>
          <Image src={round.avatar} alt='startup-rounds' fill className='object-cover' />
        </div>
        <p>{round.startupName} ({round.name} | {round.expiry})</p>
        <StatusShowCard status={Status.APPROVED} />
      </div>

      <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
        <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>KYC Status</p>
        <div>
          {renderStatusDetails(round.pledges.KYC_STATUS)}
        </div>
      </div>

      <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
        <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>C.A. Status</p>
        <div>
          {renderStatusDetails(round.pledges.CA_STATUS)}
        </div>
      </div>

      <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
        <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>Consent</p>
        <div>
          {renderStatusDetails(round.pledges.CONSENT)}
        </div>
      </div>

      <div className='col-span-2 border-l border-solid border-[#E8E8F1] px-4 py-[15px] flex flex-col items-start justify-start gap-5'>
        <p className='text-[#32363B] text-[12px] font-rubik-medium_500'>Drawdown</p>
        <div>
          {renderStatusDetails(round.pledges.DRAWDOWN)}
        </div>
      </div>
    </Link>
  )
}

export default StartupRoundsCard
