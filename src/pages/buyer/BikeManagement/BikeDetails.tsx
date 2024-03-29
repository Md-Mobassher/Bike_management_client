import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import { useGetSingleBikeQuery } from "@/redux/features/bike/bikeApi";
import { useParams } from "react-router-dom";

const BikeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBikeQuery(id);
  const {
    bikeImage,
    quantity,
    name,
    brand,
    color,
    size,
    model,
    bikeId,
    releaseDate,
    type,
    price,
    suspensionType,
    material,
    gearType,
  } = data?.data || {};

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    console.error(isError);
    return (
      <div className="text-center py-14 text-red-500 text-lg font-semibold ">
        Error loading bikes. Please try again later.
      </div>
    );
  }
  return (
    <div className="w-full h-full  justify-center p-10">
      <h2 className="text-2xl font-bold text-center text-green-500 mb-6">
        Bike Details
      </h2>
      <Card className="lg:max-w-4xl md:max-w-3xl mx-auto">
        <img
          className="h-80 w-full border-b-2 mb-4"
          src={bikeImage}
          alt={name}
        />
        <CardContent>
          <div className="flex flex-wrap justify-between">
            <p className="text-xl font-bold">
              Name:
              <span className="text-green-500"> {name}</span>
            </p>
            <p className="text-lg font-semibold">
              ID:{" "}
              <span className="text-xl font-bold text-green-500">{bikeId}</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-between py-2">
            <p className="text-lg font-semibold">
              Price:{" "}
              <span className="text-xl font-bold text-green-500">
                $ {price}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Quantity:{" "}
              <span className="text-xl font-bold text-green-500">
                {quantity}
              </span>
            </p>
          </div>

          <div className="lg:flex md:flex lg:justify-between md:justify-between justify-start text-lg gap-3">
            <div className="flex flex-col  justify-start">
              <p>
                <span className="font-semibold">Brand: </span>
                {brand}
              </p>
              <p>
                <span className="font-semibold">Model: </span> {model}
              </p>
              <p>
                <span className="font-semibold">Color: </span> {color}
              </p>
              <p>
                <span className="font-semibold">Release Date:</span>{" "}
                {releaseDate}
              </p>
              <p>
                <span className="font-semibold">Size: </span> {size}
              </p>
            </div>
            <div className="flex flex-col lg:items-end md:items-end items-start">
              <p>
                <span className="font-semibold">Type: </span> {type}
              </p>
              <p>
                <span className="font-semibold">Material: </span> {material}
              </p>
              <p>
                <span className="font-semibold">Gear: </span>
                {gearType}
              </p>
              <p>
                <span className="font-semibold">Suspension:</span>
                {suspensionType}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-3">
            {/* <Button className="bg-yellow-600">Update</Button>
            <Button className="bg-red-700">Delete</Button> */}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BikeDetails;
