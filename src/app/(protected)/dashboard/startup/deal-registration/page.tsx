import DealsRegistrations from "@/components/global/DealsRegistrations";
import SearchAndFilter from "@/components/global/SearchAndFilter";


const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
          <SearchAndFilter />
          <DealsRegistrations/>
    </div>
  );
};

export default Page;
