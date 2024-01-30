/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import BikeCard from "./BikeCard";
import { bike } from "@/types/bike.type";

const UserDashboard = () => {
  const { data: bikes, isLoading, isError } = useGetAllBikesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching bikes. console.log(error);</div>;
  }

  return (
    <div className="pr-20 grid grid-cols-3 gap-4">
      {bikes &&
        bikes.data.map((bike: bike) => <BikeCard key={bike._id} {...bike} />)}
    </div>
  );
};

export default UserDashboard;
