import BikeDatePicker from "@/components/form/BikeDatePickers";
import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";
import BikeSelect from "@/components/form/BikeSelect";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { bikeServiceNamesOptions } from "@/constant/global";
import { useRequestMaintenanceMutation } from "@/redux/features/maintenance/maintenanceApi";
import { Card } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const RequestMaintenance = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [requestMaintenance] = useRequestMaintenanceMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Requesting for maintenance...");

    try {
      const requestmaintenanceInfo = {
        bikeId: id,
        lastServicingDate: data.lastServicingDate,
        nextServicingDate: data.nextServicingDate,
        serviceDetails: data.serviceDetails,
        notes: data.notes,
      };

      await requestMaintenance(requestmaintenanceInfo);

      toast.success("Maintenance Request Successfull.", {
        id: toastId,
        duration: 3000,
      });
      navigate(`/buyer/dashboard`);
    } catch (err) {
      toast.error("Maintenance Request Failed.", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center lg:px-20 px-10 py-10 ">
      <Card className="lg:w-[450px] md:w-[450px] max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-500 mb-5">
            Request Maintenance Info
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BikeForm onSubmit={onSubmit}>
            <BikeDatePicker
              name="lastServicingDate"
              label="Last Servicing Date"
            />
            <BikeDatePicker
              name="nextServicingDate"
              label="Next Servicing Date"
            />

            <BikeSelect
              mode="multiple"
              options={bikeServiceNamesOptions}
              name="serviceDetails"
              label="Service Details"
              placeholder="Service Details"
            />

            <BikeInput
              type="text"
              name="notes"
              label="Notes"
              placeholder="Notes"
            />

            <div className="flex justify-center">
              <Button
                className="mt-7 bg-green-500 hover:bg-green-400 px-7"
                type="submit"
              >
                Request Maintenance
              </Button>
            </div>
          </BikeForm>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestMaintenance;
