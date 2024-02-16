/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useUpdateABikeMutation,
} from "@/redux/features/bike/bikeApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const UpdateBikeModal = ({ id }: any) => {
  const { register, handleSubmit } = useForm();
  const [updateBike] = useUpdateABikeMutation();
  const { refetch } = useGetAllBikesQuery(undefined);
  const { data } = useGetSingleBikeQuery(id);
  const {
    name,
    brand,
    color,
    model,
    price,
    quantity,
    releaseDate,
    size,
    type,
  } = data?.data || {};

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating Bike");

    try {
      const updatedBike = {
        name: data.name,
        price: Number(data.price),
        quantity: Number(data.quantity),
        releaseDate: data.releaseDate,
        brand: data.brand,
        model: data.model,
        type: data.type,
        size: data.size,
        color: data.color,
      };

      const res = await updateBike({ id, updatedBike }).unwrap();

      toast.success(res?.message || "Bike Update Successfully.", {
        id: toastId,
        duration: 3000,
      });
      refetch();
    } catch (err) {
      toast.error("Failed to update bike. Something went wrong", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-orange-700">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update Bike Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              className="col-span-3"
              id="name"
              defaultValue={name}
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              className="col-span-3"
              id="price"
              defaultValue={price}
              {...register("price")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              className="col-span-3"
              id="quantity"
              defaultValue={quantity}
              {...register("quantity")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="releaseDate">Release Date</Label>
            <Input
              type="date"
              className="col-span-3"
              id="releaseDate"
              defaultValue={releaseDate}
              {...register("releaseDate")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand">Brand Name</Label>
            <Input
              className="col-span-3"
              id="brand"
              defaultValue={brand}
              {...register("brand")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model">Model</Label>
            <Input
              className="col-span-3"
              id="model"
              defaultValue={model}
              {...register("model")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type">Type</Label>
            <Input
              className="col-span-3"
              id="type"
              defaultValue={type}
              {...register("type")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="size">Size</Label>
            <select
              className="input border rounded-lg p-2 col-span-3"
              defaultValue={size}
              {...register("size", { required: true })}
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color">Color</Label>
            <Input
              className="col-span-3"
              id="color"
              defaultValue={color}
              {...register("color")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file">Bike Image</Label>
            <Input
              type="file"
              className="col-span-3"
              id="file"
              placeholder="Bike Image"
              {...register("file")}
            />
          </div>
          <div className="flex justify-end">
            <Button className="bg-orange-500" type="submit">
              Update Bike
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBikeModal;
