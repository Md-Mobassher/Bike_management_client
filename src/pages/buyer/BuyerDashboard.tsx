import { useGetAllBikesQuery } from "@/redux/features/bike/bikeApi";
import Loading from "@/components/ui/Loading";
import { TBike } from "@/types/bike.type";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BikeSelect from "@/components/form/BikeSelect";
import { bikeSizeOptions, bikeTypesOptions } from "@/constant/global";
import BikeForm from "@/components/form/BikeForm";
import BikeInput from "@/components/form/BikeInput";

import { Col, Row } from "antd";
import BuyerBikeCard from "./BikeManagement/BuyerBikeCard";

const BuyerDashboard = () => {
  const [filter, setFilter] = useState<FieldValues>(undefined || [{}]);

  const {
    data: bikes,
    isLoading,
    isError,
    error,
  } = useGetAllBikesQuery(filter);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(error);
    return (
      <div className="text-center py-14 text-red-500 text-lg font-semibold ">
        Error loading bikes. Please try again later.
      </div>
    );
  }

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Filterring bike...");

    try {
      const filterInfo = Object.entries(data)
        .filter(([value]) => value !== undefined)
        .map(([key, value]) => ({ name: [key], value: value }));

      setFilter(filterInfo);

      toast.success("Successfully Filterred Bike", {
        id: toastId,
        duration: 3000,
      });
    } catch (err) {
      toast.error("Failed to Filter bike.", {
        id: toastId,
        duration: 3000,
      });
    }
  };

  return (
    <div className="lg:px-10 px-4 md:px-5 py-5 mb-10">
      <div className="mb-5 ">
        <div className="">
          <BikeForm onSubmit={onSubmit}>
            <Row gutter={5} className="">
              <Col span={8} md={{ span: 4 }} lg={{ span: 2 }}>
                <BikeInput
                  type="text"
                  name="bikeId"
                  label="Id"
                  placeholder="Id (bk-001)"
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 2 }}>
                <BikeInput
                  type="number"
                  name="minPrice"
                  label="MinPrice"
                  placeholder="MinPrice"
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 2 }}>
                <BikeInput
                  type="number"
                  name="maxPrice"
                  label="MaxPrice"
                  placeholder="MaxPrice"
                />
              </Col>
              {/* <Col span={8} md={{ span: 6 }} lg={{ span: 3 }}>
                <BikeDatePicker name="releaseDate" label="ReleaseDate" />
              </Col> */}
              <Col span={8} md={{ span: 4 }} lg={{ span: 3 }}>
                <BikeInput
                  type="text"
                  name="brand"
                  label="Brand"
                  placeholder="Brand"
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 3 }}>
                <BikeInput
                  type="text"
                  name="model"
                  label="Model"
                  placeholder="Model"
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 3 }}>
                <BikeSelect
                  options={bikeTypesOptions}
                  name="type"
                  label="Type"
                  placeholder="Type"
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 3 }}>
                <BikeSelect
                  label="Size"
                  name="size"
                  placeholder="Size"
                  options={bikeSizeOptions}
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 3 }}>
                <BikeInput
                  type="text"
                  name="color"
                  label="Color"
                  placeholder="Color"
                />
              </Col>
              <Col span={8} md={{ span: 4 }} lg={{ span: 3 }}>
                <Button
                  className="mt-7 bg-green-500 hover:bg-green-400 px-7"
                  type="submit"
                >
                  Filter
                </Button>
              </Col>
            </Row>
          </BikeForm>
        </div>
      </div>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center items-stretch lg:gap-5 md:gap-4 gap-3">
        {bikes?.data?.map((bike: TBike) => (
          <BuyerBikeCard key={bike?._id} {...bike} />
        ))}
      </div>
      <div>
        {bikes?.data?.length === 0 && (
          <p className="text-center py-14 text-red-500 text-lg font-semibold ">
            No Bikes Found
          </p>
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard;
