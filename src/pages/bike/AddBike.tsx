/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAddBikeMutation } from "@/redux/features/bike/bikeApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddBikeModal = () => {
  const { register, handleSubmit } = useForm();
  const [addBike, { isError, isLoading }] = useAddBikeMutation();
  // const dispatch = useAppDispatch();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Bike to Database");

    try {
      const bikeInfo = {
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        releaseDate: data.releaseDate,
        brand: data.brand,
        model: data.model,
        type: data.type,
        size: data.size,
        color: data.color,
        file: data.file,
      };
      console.log(bikeInfo);
      const res = await addBike(bikeInfo).unwrap();
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 3000 });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-green-600 hover:text-white">
          Add Bike
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Bike Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name">Name</Label>
            <Input
              className="col-span-3"
              id="name"
              placeholder="Bike Name"
              {...register("name")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              className="col-span-3"
              id="price"
              placeholder="Bike Price"
              {...register("price")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              className="col-span-3"
              id="quantity"
              placeholder="Bike Quantity"
              {...register("quantity")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="releaseDate">Release Date</Label>
            <Input
              type="date"
              className="col-span-3"
              id="releaseDate"
              placeholder="Bike Release Date"
              {...register("releaseDate")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="brand">Brand Name</Label>
            <Input
              className="col-span-3"
              id="brand"
              placeholder="Bike Brand Name"
              {...register("brand")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="model">Model</Label>
            <Input
              className="col-span-3"
              id="model"
              placeholder="Bike Model No"
              {...register("model")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="type">Type</Label>
            <Input
              className="col-span-3"
              id="type"
              placeholder="Bike Type"
              {...register("type")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="size">Size</Label>
            <Select>
              <SelectTrigger
                className="col-span-3"
                {...register("size")}
                id="size"
              >
                <SelectValue placeholder="Bike Size" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color">Color</Label>
            <Input
              className="col-span-3"
              id="color"
              placeholder="Bike Color"
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
            <Button className="" type="submit">
              Add Bike
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBikeModal;
