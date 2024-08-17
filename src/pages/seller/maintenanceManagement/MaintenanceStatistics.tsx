import AnalyticsPieChart from "@/components/ui/AnalyticsPieChart";
import AnalyticsChart from "../../../components/ui/AnalyticChart";
import StaticsCard from "../bikeManagement/StaticsCard";

type MaintenanceAnalyticsData = {
  totalRequests: number;
  totalAccepted: number;
  totalPending: number;
};

type MaintenanceStatisticsProps = {
  maintenance: MaintenanceAnalyticsData;
};

const MaintenanceStatistics = ({ maintenance }: MaintenanceStatisticsProps) => {
  const data = [
    { name: "Total Request", value: maintenance.totalRequests },
    { name: "Total Accepted", value: maintenance.totalAccepted },
    { name: "Total Pending", value: maintenance.totalPending },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 md:gap-4 gap-3">
        {data.map((item, index) => (
          <StaticsCard key={index} name={item?.name} value={item.value} />
        ))}
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col gap-10 mt-16 justify-center items-center">
        <div className="flex flex-col justify-center items-center w-full lg:w-[45%] md:w-[45%]">
          <h1 className="text-xl font-bold mb-3">Pet Analytics</h1>
          <AnalyticsChart data={data} />
        </div>
        <div className="flex flex-col justify-center items-center   w-full lg:w-[45%] md:w-[45%]">
          <h1 className="text-xl font-bold mb-3">Pet Analytics</h1>
          <AnalyticsPieChart data={data} />
        </div>
      </div>
    </>
  );
};

export default MaintenanceStatistics;
