import { CurrentIcon, StartupStatsIcon, UserStatsIcon } from "@/Icon/SvgIcon";
import StatsCard from "./StatsCard";

const data1 = {
  title: "Current ongoing deals",
  Icon: <CurrentIcon />,
};
const data2 = {
  title: "Startups Listed",
  Icon: <StartupStatsIcon />,
};
const data3 = {
  title: "New User Registrations",
  Icon: <UserStatsIcon />,
};

const StatsSection = () => {
  return (
    <div className="grid w-full grid-cols-1 sm:grid-cols-3 gap-5">
      <StatsCard data={data1} statsValue={1234} />
      <StatsCard data={data2} statsValue={1234} />
      <StatsCard data={data3} statsValue={1234} />
    </div>
  );
};

export default StatsSection;
