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
import { useAddBikeMutation } from "@/redux/features/bike/bikeApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const AddBikeModal = () => {
  const { register, handleSubmit } = useForm();
  const [addBike] = useAddBikeMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Bike to Database");

    try {
      const formData = new FormData();
      // Append files to FormData
      for (const file of data.file) {
        formData.append("file", file);
      }
      const bikeInfo = {
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

      formData.append("data", JSON.stringify(bikeInfo));
      await addBike(formData).unwrap();

      toast.success("Bike Added Successfully.", {
        id: toastId,
        duration: 3000,
      });
    } catch (err) {
      toast.error("Failed to add bike. Something went wrong", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-green-600 hover:text-white">
          Add New Bike
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
            <select
              className="input border rounded-lg p-2 col-span-3"
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
