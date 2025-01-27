import { cn } from "@/lib/utils";

type Props = {
  data: {
    title: string;
    Icon: React.ReactNode;
  };
  statsValue: number;
};

const StatsCard = ({ data, statsValue }: Props) => {
  const { Icon, title } = data;

  return (
    <div className=" col-span-1 flex flex-row items-center rounded-[12px] border-[1px] border-solid border-[#E8E8F1] justify-start bg-white px-[28px] py-[23px] gap-5  ">
      <div
        className={cn(
          "p-[5px] rounded-[4px] overflow-hidden",
          title === "Current ongoing deals" && "bg-[#FADADA]",
          title === "Startups Listed" && "bg-[#A6FCB8]",
          title === "New User Registrations" && "bg-[#E8E6FF]"
        )}
      >
        {Icon}
      </div>
      <div className="flex flex-col items-start justify-start gap-[3px]">
        <p className="text-[10px] font-rubik-regular_400 leading-[110%] text-[#383838]">
          {title}
        </p>
        <p className=" text-[25px] text-[#282828] font-urbanist-semibold_600 leading-[110%] ">
          {statsValue}
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
