import Loading from "@/components/ui/Loading";
import { useGetbikeAnalyticsQuery } from "@/redux/features/bike/bikeApi";
import BikeStatistics from "./bikeManagement/BikeStatistics";

const SellerDashboard = () => {
  const {
    data: bikes,
    isLoading,
    isError,
  } = useGetbikeAnalyticsQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-center py-14 text-red-500 text-lg font-semibold ">
        Error loading bikes data. Please try again later.
      </div>
    );
  }

  return (
    <div className="p-8 bg-content1 min-h-screen">
      <div className="mb-20">
        <h1 className="text-3xl font-bold mb-6">Bike Statistics</h1>
        <BikeStatistics bikes={bikes?.data} />
      </div>
      <div className="my-20">
        <h1 className="text-3xl font-bold mb-6">Pet Statistics</h1>
        {/*         <PetStatistics pets={petData} /> */}
      </div>
    </div>
  );
};

export default SellerDashboard;
