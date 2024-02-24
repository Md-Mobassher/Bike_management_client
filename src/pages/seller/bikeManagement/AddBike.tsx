import BikeDatePicker from "@/components/form/BikeDatePickers";
import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";
import BikeSelect from "@/components/form/BikeSelect";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  bikeGearTypesOptions,
  bikeMaterialsOptions,
  bikeSizeOptions,
  bikeSuspensionTypesOptions,
  bikeTypesOptions,
} from "@/constant/global";
import { useAddBikeMutation } from "@/redux/features/bike/bikeApi";
import { Card, Col, Form, Input, Row } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddBikeModal = () => {
  const [addBike] = useAddBikeMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Adding Bike...");

    try {
      const bikeInfo = {
        bikeId: data.bikeId,
        name: data.name,
        price: Number(data.price),
        quantity: Number(data.quantity),
        releaseDate: data.releaseDate,
        brand: data.brand,
        model: data.model,
        type: data.type,
        size: data.size,
        color: data.color,
        gearType: data.gearType,
        material: data.material,
        suspensionType: data.suspensionType,
      };
      const formData = new FormData();

      formData.append("data", JSON.stringify(bikeInfo));
      formData.append("file", data.bikeImage);

      await addBike(formData).unwrap();

      toast.success("Bike Added Successfully.", {
        id: toastId,
        duration: 3000,
      });
      navigate(`/seller/dashboard`);
    } catch (err) {
      toast.error("Failed to add bike. Something went wrong", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center lg:px-20 px-10 py-10 min-h-screen ">
      <Card className="max-w-5xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-green-500">
            Add Bike Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Row justify="center">
            <Col span={24}>
              <BikeForm onSubmit={onSubmit}>
                <Row gutter={16}>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="name"
                      label="Bike Name"
                      placeholder="Bike Name"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="bikeId"
                      label="Bike Id"
                      placeholder="Bike Id (bk-001)"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="number"
                      name="price"
                      label="Price"
                      placeholder="Bike Price"
                    />
                  </Col>

                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="number"
                      name="quantity"
                      label="Quantity"
                      placeholder="Bike Quantity"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeDatePicker name="releaseDate" label="Release Date" />
                  </Col>

                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="brand"
                      label="Brand Name"
                      placeholder="Bike Brand Name"
                    />
                  </Col>

                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="model"
                      label="Model No"
                      placeholder="Bike Model No"
                    />
                  </Col>

                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      options={bikeTypesOptions}
                      name="type"
                      label="Type"
                      placeholder="Bike Type"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      label="Size"
                      name="size"
                      placeholder="Bike Size"
                      options={bikeSizeOptions}
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="text"
                      name="color"
                      label="Bike Color"
                      placeholder="Bike Color"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      options={bikeGearTypesOptions}
                      name="gearType"
                      label="Gear Type"
                      placeholder="Bike Gear Type"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      options={bikeMaterialsOptions}
                      name="material"
                      label="Material Type"
                      placeholder="Bike Material Type"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeSelect
                      options={bikeSuspensionTypesOptions}
                      name="suspensionType"
                      label="Suspension Type"
                      placeholder="Bike Suspension Type"
                    />
                  </Col>
                  <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <Controller
                      name="bikeImage"
                      render={({ field: { onChange, value, ...field } }) => (
                        <Form.Item label="Bike Image">
                          <Input
                            placeholder="Bike Image"
                            type="file"
                            value={value?.fileName}
                            {...field}
                            onChange={(e) => onChange(e.target.files?.[0])}
                          />
                        </Form.Item>
                      )}
                    />
                  </Col>
                </Row>

                <Row gutter={24}>
                  <Col span={24} className="flex justify-center mt-5">
                    <Button
                      className="bg-green-500 hover:bg-green-400 px-6"
                      type="submit"
                    >
                      Add Bike
                    </Button>
                  </Col>
                </Row>
              </BikeForm>
            </Col>
          </Row>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddBikeModal;
