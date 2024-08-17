import Loading from "@/components/ui/Loading";
import { useGetbikeAnalyticsQuery } from "@/redux/features/bike/bikeApi";
import BikeStatistics from "./bikeManagement/BikeStatistics";
import MaintenanceStatistics from "./maintenanceManagement/MaintenanceStatistics";
import { useGetMaintenanceAnalyticsQuery } from "@/redux/features/maintenance/maintenanceApi";

const SellerDashboard = () => {
  const {
    data: bikes,
    isLoading: bikeLoading,
    isError: bikeError,
  } = useGetbikeAnalyticsQuery(undefined);

  const {
    data: maintenances,
    isLoading: maintenanceLoading,
    isError: maintenanceError,
  } = useGetMaintenanceAnalyticsQuery(undefined);

  if (bikeLoading || maintenanceLoading) {
    return <Loading />;
  }

  if (bikeError || maintenanceError) {
    return (
      <div className="text-center py-14 text-red-500 text-lg font-semibold ">
        Error loading data. Please try again later.
      </div>
    );
  }
  // console.log(maintenances);
  return (
    <div className="p-8 bg-content1 min-h-screen">
      <div className="mb-20">
        <h1 className="text-3xl font-bold mb-6">Bike Statistics</h1>
        <BikeStatistics bikes={bikes?.data} />
      </div>
      <div className="my-20">
        <h1 className="text-3xl font-bold mb-6">Maintenance Statistics</h1>
        <MaintenanceStatistics maintenance={maintenances?.data} />
      </div>
    </div>
  );
};

export default SellerDashboard;
