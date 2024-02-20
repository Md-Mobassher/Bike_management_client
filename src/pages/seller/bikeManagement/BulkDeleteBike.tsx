import {
  useBulkDeleteBikesMutation,
  useGetAllBikesQuery,
} from "@/redux/features/bike/bikeApi";
import Loading from "@/components/ui/Loading";
import { TBike } from "@/types/bike.type";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const BulkDeleteBike = () => {
  const [selectedBikeIds, setSelectedBikeIds] = useState<string[]>([]);
  const {
    data: bikes,
    isLoading,
    isError,
    error,
  } = useGetAllBikesQuery(undefined);
  const [deleteBikes] = useBulkDeleteBikesMutation();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(error);
    return <div>Error loading bikes. Please try again later.</div>;
  }

  const toggleState = (bikeId: string) => {
    setSelectedBikeIds((prevSelectedBikeIds) => {
      if (prevSelectedBikeIds.includes(bikeId)) {
        return prevSelectedBikeIds.filter((id) => id !== bikeId);
      } else {
        return [...prevSelectedBikeIds, bikeId];
      }
    });
  };

  const handleDeleteClick = async () => {
    const toastId = toast.loading("Deleting Selected Bikes...");

    try {
      const data = {
        bikeIds: selectedBikeIds,
      };

      await deleteBikes(data).unwrap();

      toast.success("Bikes Deleted Successfully.", {
        id: toastId,
        duration: 3000,
      });
    } catch (err) {
      toast.error("Failed to delete bikes.", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div className="lg:px-10 md:px-6 px-3 py-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="lg:text-2xl md:text-2xl text-xl font-bold text-green-500">
          Select Multiple Bikes
        </h2>
        <Button
          className="bg-green-500 hover:bg-green-400"
          onClick={handleDeleteClick}
        >
          Delete Selected Bikes
        </Button>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-stretch lg:gap-5 md:gap-4 gap-3">
        {bikes &&
          bikes?.data?.map((bike: TBike) => (
            <Card
              className="sm:max-w-[400px] p-0 m-0"
              key={bike._id}
              cover={
                <div className="relative">
                  <input
                    className="absolute top-5 left-5 size-5 rounded-lg border-green-400 "
                    onChange={() => toggleState(bike._id)}
                    type="checkbox"
                    name="bikeId"
                    id="bike._id"
                  />
                  <img
                    className="h-40 w-full border-b-2 rounded-t-md"
                    alt="example"
                    src={bike.bikeImage}
                  />
                </div>
              }
            >
              <Meta
                style={{ margin: "0px", width: "100%" }}
                title={
                  <div>
                    <p>{bike?.name}</p>
                  </div>
                }
                description={
                  <div>
                    <p>
                      <span className="font-bold text-gray-00">ID:</span>{" "}
                      {bike?.bikeId}
                    </p>
                    <p>
                      <span className="font-bold text-gray-00">Price:</span>{" "}
                      {bike?.price}
                    </p>
                    <p>
                      <span className="font-bold text-gray-00">Quantity:</span>{" "}
                      {bike?.quantity}
                    </p>
                  </div>
                }
              />
            </Card>
          ))}
      </div>
    </div>
  );
};

export default BulkDeleteBike;
