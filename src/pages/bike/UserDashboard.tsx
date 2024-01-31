/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import BikeCard from "./BikeCard";
import { bike } from "@/types/bike.type";
import Loading from "@/components/ui/Loading";

const UserDashboard = () => {
  const { data: bikes, isLoading, isError } = useGetAllBikesQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error fetching bikes. console.log(error);</div>;
  }

  return (
    <div className="p-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {bikes &&
        bikes.data.map((bike: bike) => <BikeCard key={bike._id} {...bike} />)}
    </div>
  );
};

export default UserDashboard;
