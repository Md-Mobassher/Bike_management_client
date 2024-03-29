import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useUpdateMaintenanceMutation } from "@/redux/features/maintenance/maintenanceApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

const UpdateMaintenance: React.FC<{ id: string }> = ({ id }) => {
  const [updateMaintenance] = useUpdateMaintenanceMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Updating maintenance request...");

    console.log(data);
    try {
      const updateMaintenanceInfo = {
        maintenanceId: id,
        isPending: false,
        discount: {
          percentage: Number(data.percentage),
          fixedAmount: Number(data.fixedAmount),
        },
      };
      console.log(updateMaintenanceInfo);
      const res = await updateMaintenance(updateMaintenanceInfo).unwrap();

      toast.success(
        res?.message || "Maintenance request updated successfully.",
        {
          id: toastId,
          duration: 3000,
        }
      );
    } catch (err) {
      console.log(err);
      toast.error(" Failed to updating maintenance request", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div className="py-3">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-green-500 hover:bg-green-400 text-white">
            Update
          </Button>
        </DialogTrigger>
        <DialogContent className="lg:max-w-[450px] md:max-w-[400px] max-w-[360px] lg:p-10 rounded-lg">
          <DialogHeader>
            <DialogTitle className="lg:text-2xl md:text-2xl text-xl font-bold text-center text-green-500 mb-5">
              Maintenance Update Info
            </DialogTitle>
          </DialogHeader>
          <BikeForm onSubmit={onSubmit}>
            <BikeInput
              type="number"
              name="percentage"
              label="Percentage"
              placeholder="Give Discount Percentage"
            />
            <BikeInput
              type="number"
              name="fixedAmount"
              label="Fixed Amount"
              placeholder="Fixed Amount"
            />
            <div className="flex justify-center mt-8">
              <Button
                className="bg-green-500 hover:bg-green-400 text-white"
                type="submit"
              >
                Update
              </Button>
            </div>
          </BikeForm>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateMaintenance;
