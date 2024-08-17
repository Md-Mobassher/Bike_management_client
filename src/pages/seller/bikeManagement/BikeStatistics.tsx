import BikeAnalyticsChart from "./BikeAnalyticChart";
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
    <div className="flex lg:flex-row md:flex-row flex-col gap-5">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-4 gap-3 lg:w-[70%] w-full">
        {data?.map((item, index) => (
          <StaticsCard key={index} name={item.name} value={item.value} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center lg:w-[29%] w-full">
        <h1 className="text-xl font-bold mb-3">Bike Analytics</h1>
        <BikeAnalyticsChart data={data} />
      </div>
    </div>
  );
};

export default BikeStatistics;
