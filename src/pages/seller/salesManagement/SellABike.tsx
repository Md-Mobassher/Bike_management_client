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
import { useSellABikeMutation } from "@/redux/features/sell/sellApi";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

const SellBikeModal: React.FC<{ id: string }> = ({ id }) => {
  const { register, handleSubmit } = useForm();
  const [sellBike] = useSellABikeMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Selling a bike...");

    try {
      const sellInfo = {
        bikeId: id,
        quantity: Number(data.quantity),
        buyerName: data.buyerName,
        salesDate: data.salesDate,
      };

      const res = await sellBike(sellInfo).unwrap();

      toast.success(res?.message, {
        id: toastId,
        duration: 3000,
      });
    } catch (err) {
      toast.error(
        err?.data?.message || " Failed to sell bike .An error occurred",
        {
          id: toastId,
          duration: 3000,
        }
      );
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-500">Sell</Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[450px] md:max-w-[400px] max-w-[360px] lg:p-10 rounded-lg">
          <DialogHeader>
            <DialogTitle className="lg:text-2xl md:text-2xl text-xl font-bold text-center text-green-500 mb-2">
              Add Sales Information
            </DialogTitle>
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
              0.
            </div>

            <div className="flex lg:justify-end md:justify-end justify-center mt-5">
              <Button className="bg-green-500 hover:bg-green-400" type="submit">
                Sell This Bike
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SellBikeModal;
