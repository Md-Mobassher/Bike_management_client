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
import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import { useSellABikeMutation } from "@/redux/features/sell/sellApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const SellBikeModal: React.FC<{ id: string }> = ({ id }) => {
  const { refetch } = useGetAllBikesQuery(undefined);
  const { register, handleSubmit } = useForm();
  const [sellBike] = useSellABikeMutation();

  const onSubmit = async ({ quantity, buyerName, salesDate }: any) => {
    const toastId = toast.loading("Selling a bike...");

    try {
      const sellInfo = {
        bikeId: id,
        quantity: Number(quantity),
        buyerName: buyerName,
        salesDate: salesDate,
      };

      const res = await sellBike(sellInfo).unwrap();

      toast.success(res?.message, {
        id: toastId,
        duration: 3000,
      });
      refetch();
    } catch (err) {
      console.log(err);
      toast.error(" Failed to sell bike .An error occurred", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-violet-600 text-white ">Sell</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Sell Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              type="number"
              className="col-span-3"
              id="quantity"
              placeholder="Quantity of Bike"
              {...register("quantity")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="buyerName">Buyer Name</Label>
            <Input
              className="col-span-3"
              id="buyerName"
              placeholder="Buyer Name"
              {...register("buyerName")}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="salesDate">Sales Date</Label>
            <Input
              type="date"
              className="col-span-3"
              id="salesDate"
              placeholder="Sales Date"
              {...register("salesDate")}
            />
          </div>

          <div className="flex justify-end">
            <Button className="" type="submit">
              Sell This Bike
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SellBikeModal;
