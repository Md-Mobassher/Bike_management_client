import BikeDatePicker from "@/components/form/BikeDatePickers";
import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";
import BikeSelect from "@/components/form/BikeSelect";
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  bikeGearTypesOptions,
  bikeMaterialsOptions,
  bikeSizeOptions,
  bikeSuspensionTypesOptions,
  bikeTypesOptions,
} from "@/constant/global";
import {
  useDuplicateBikeMutation,
  useGetSingleBikeQuery,
} from "@/redux/features/bike/bikeApi";
import { TBike } from "@/types/bike.type";
import { Card, Col, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const DuplicateBike = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [duplicateBike] = useDuplicateBikeMutation();
  const { data: bikeData, isLoading, isError } = useGetSingleBikeQuery(id);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading bike. Please try again later.</div>;
  }
  console.log(bikeData?.data);

  const bikeDefaultValues: Partial<TBike> =
    {
      bikeId: bikeData?.data?.bikeId,
      name: bikeData?.data?.name,
      price: bikeData?.data?.price,
      quantity: bikeData?.data?.quantity,
      brand: bikeData?.data?.brand,
      model: bikeData?.data?.model,
      type: bikeData?.data?.type,
      size: bikeData?.data?.size,
      color: bikeData?.data?.color,
      gearType: bikeData?.data?.gearType,
      material: bikeData?.data?.material,
      suspensionType: bikeData?.data?.suspensionType,
      bikeImage: bikeData?.data?.bikeImage,
    } || {};

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Duplicating Bike...");

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
        bikeImage: data.bikeImage,
      };

      const newBike = {
        id,
        duplicateBikeData: bikeInfo,
      };
      const res = await duplicateBike(newBike).unwrap();
      console.log(res);
      toast.success("Bike Duplicated Successfully.", {
        id: toastId,
        duration: 3000,
      });
      navigate(`/seller/dashboard`);
    } catch (err) {
      toast.error("Failed to Duplicate bike.", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center lg:px-20 px-10 py-10 min-h-screen ">
      <Card className="max-w-5xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Duplicate Bike
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Row justify="center">
            <Col span={24}>
              <BikeForm onSubmit={onSubmit} defaultValues={bikeDefaultValues}>
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
                  {/* <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
                    <BikeInput
                      type="file"
                      name="file"
                      label="Bike Image"
                      placeholder="Bike Image"
                    />
                  </Col> */}
                </Row>

                <Row gutter={24}>
                  <Col span={24} className="flex justify-center mt-5">
                    <Button className="bg-green-600" type="submit">
                      Duplicate Bike
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

export default DuplicateBike;
