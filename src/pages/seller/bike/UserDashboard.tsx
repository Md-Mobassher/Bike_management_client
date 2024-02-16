/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import BikeCard from "./BikeCard";
import Loading from "@/components/ui/Loading";
import { TBike } from "@/types/bike.type";

const UserDashboard = () => {
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
    <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {bikes?.data?.map((bike: TBike) => (
        <BikeCard key={bike?._id} {...bike} />
      ))}
    </div>
  );
};

export default UserDashboard;
