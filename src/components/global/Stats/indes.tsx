import StatsCard from "./StatsCard";

const data = {
    title: "Current ongoing deals",
  statsValue: 245,
};

const StatsSection = () => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-5">
      <StatsCard data={data} />
      <StatsCard data={data} />
      <StatsCard data={data} />
    </div>
  );
};

export default StatsSection;
 