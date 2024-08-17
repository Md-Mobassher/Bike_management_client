import AnalyticsPieChart from "@/components/ui/AnalyticsPieChart";
import AnalyticsChart from "../../../components/ui/AnalyticChart";
import StaticsCard from "./StaticsCard";

type BikeAnalyticsData = {
  totalBikes: number;
  totalSales: number;
  totalAvailableForSale: number;
};

type BikeStatisticsProps = {
  bikes: BikeAnalyticsData;
};

const BikeStatistics = ({ bikes }: BikeStatisticsProps) => {
  const data = [
    { name: "Total Bikes", value: bikes.totalBikes },
    { name: "Total Sales", value: bikes.totalSales },
    { name: "Available for Sale", value: bikes.totalAvailableForSale },
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
          <h1 className="text-xl font-bold mb-3">Bike Analytics</h1>
          <AnalyticsChart data={data} />
        </div>
        <div className="flex flex-col justify-center items-center   w-full lg:w-[45%] md:w-[45%]">
          <h1 className="text-xl font-bold mb-3">Bike Analytics</h1>
          <AnalyticsPieChart data={data} />
        </div>
      </div>
    </>
  );
};

export default BikeStatistics;
