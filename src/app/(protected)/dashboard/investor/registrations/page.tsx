import InvestorRegistrations from "@/components/global/InvestorRegistrations";
import SearchAndFilter from "@/components/global/SearchAndFilter";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
            <SearchAndFilter />
            <InvestorRegistrations />
        </div>
    );
};

export default Page;

