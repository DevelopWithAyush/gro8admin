import { cn } from "@/lib/utils";

const DetailCard = ({
  title,
  description,
  colSpan2 = false,
}: {
  title: string;
  description: string;
  colSpan2?: boolean;
}) => {
  return (
    <div
      className={cn(
        " w-full flex flex-col items-start justify-start gap-1",
        colSpan2 ? "col-span-2" : " col-span-1"
      )}
    >
      <p className="text-[#7D7D88] text-[12px] font-rubik-light_300 leading-[110%]">
        {title}
      </p>
      <p className="text-[#151517] text-[16px] font-rubik-regular_400 leading-5">
        {description}
      </p>
    </div>
  );
};

export default DetailCard;