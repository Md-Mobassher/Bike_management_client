import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useDeleteABikeMutation } from "@/redux/features/bike/bikeApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import SellBikeModal from "../salesManagement/SellABike";
import { TBike } from "@/types/bike.type";

const BikeCard = ({
  _id,
  name,
  bikeImage,
  brand,
  color,
  model,
  price,
  quantity,
}: TBike) => {
  const navigate = useNavigate();

  const [deleteABike, { isLoading, isError, isSuccess }] =
    useDeleteABikeMutation();

  // bike details
  const handleDuplicate = (id: string) => {
    navigate(`/seller/duplicate-bike/${id}`);
  };

  const handleEditBike = (id: string) => {
    navigate(`/seller/update-bike/${id}`);
  };

  // delete a bike
  const handleDeleteBike = async (id: string) => {
    const toastId = toast.loading("Deleteing Bike");
    {
      isLoading &&
        toast.loading("Deleteing Bike", { id: toastId, duration: 3000 });
    }

    try {
      await deleteABike(id);
      {
        isSuccess &&
          toast.loading("Deleteing Bike", { id: toastId, duration: 3000 });
      }
    } catch (error) {
      console.error("Error deleting bike:", error);
      {
        isError &&
          toast.error("Bike delete failed. Something went wrong", {
            id: toastId,
            duration: 3000,
          });
      }
    }
  };

  return (
    <Card className="sm:max-w-[400px] ">
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
      <CardFooter className="flex justify-between gap-2 flex-wrap">
        <Button className="bg-green-600" onClick={() => handleDuplicate(_id)}>
          Duplicate
        </Button>
        <Button className="bg-red-700" onClick={() => handleEditBike(_id)}>
          Edit
        </Button>
        <SellBikeModal id={_id} />
        <Button className="bg-red-700" onClick={() => handleDeleteBike(_id)}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BikeCard;
