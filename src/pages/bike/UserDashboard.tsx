/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import BikeCard from "./BikeCard";
import { bike } from "@/types/bike.type";
import Loading from "@/components/ui/Loading";

const UserDashboard = () => {
  const {
    data: bikes,
    isLoading,
    isError,
    error,
  } = useGetAllBikesQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(error);
    return <div>Error loading bikes. Please try again later.</div>;
  }

  if (!bikes?.success) {
    return <div>No bikes available.</div>;
  }

  return (
    <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {bikes.data.map((bike: bike) => (
        <BikeCard key={bike?._id} {...bike} />
      ))}
    </div>
  );
};

export default UserDashboard;
