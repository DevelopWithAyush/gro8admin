import MentorRegistrations from "@/components/global/MentorRegistrations";
import SearchAndFilter from "@/components/global/SearchAndFilter";

const Page = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full gap-[33px] ">
      <SearchAndFilter />
      <MentorRegistrations />
    </div>
  );
};

export default Page;
