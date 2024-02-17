import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import Loading from "@/components/ui/Loading";
import { TBike } from "@/types/bike.type";
import BikeCard from "./bikeManagement/BikeCard";

const SellerDashboard = () => {
  const {
    data: bikes,
    isLoading,
    isError,
    error,
  } = useGetAllBikesQuery(undefined);

  console.log(bikes);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(error);
    return <div>Error loading bikes. Please try again later.</div>;
  }

  return (
    <div className="lg:p-10 p-5 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch lg:gap-5 md:gap-4 gap-3">
      {bikes?.data?.map((bike: TBike) => (
        <BikeCard key={bike?._id} {...bike} />
      ))}
    </div>
  );
};

export default SellerDashboard;
