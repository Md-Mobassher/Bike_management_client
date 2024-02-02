import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useDeleteABikeMutation } from "@/redux/features/bike/bikeApi";
import { bike } from "@/types/bike.type";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SellBikeModal from "../sell/SellABike";
import UpdateBikeModal from "./UpdateBike";

const BikeCard = ({
  _id,
  name,
  bikeImage,
  brand,
  color,
  model,
  price,
  quantity,
}: bike) => {
  const navigate = useNavigate();
  const [deleteBike, { isLoading, isError }] = useDeleteABikeMutation();

  // bike details
  const handleBikeDetails = (id: string) => {
    navigate(`/bike/${id}`);
  };

  // delete a bike
  const handleDeleteBike = async (id: string) => {
    const toastId = toast.loading("Deleteing Bike");
    {
      isLoading &&
        toast.loading("Deleteing Bike", { id: toastId, duration: 3000 });
    }

    try {
      const res = await deleteBike(id);
      if (res?.data?.success === true) {
        toast.success("Successfully Delete Bike.", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (error) {
      console.error("Error deleting bike:", error);
      {
        isError &&
          toast.error("Something went wrong", { id: toastId, duration: 3000 });
      }
    }
  };

  return (
    <Card className=" ">
      <img
        className="h-60 w-full border-b-2 mb-4 rounded-t-md"
        src={bikeImage}
        alt={name}
      />
      <CardContent>
        <p className="text-xl font-semibold">Name: {name}</p>
        <p className="text-xl font-semibold">Price: $ {price}</p>
        <p className="text-md font-semibold">Quantity: {quantity}</p>
        <p>Brand: {brand}</p>
        <p>Color: {color}</p>
        <p>Model: {model}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="bg-green-600" onClick={() => handleBikeDetails(_id)}>
          Details
        </Button>
        <UpdateBikeModal id={_id} />
        <SellBikeModal id={_id} />
        <Button className="bg-red-700" onClick={() => handleDeleteBike(_id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BikeCard;
