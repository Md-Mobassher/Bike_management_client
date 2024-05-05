import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import { useGetSingleBikeQuery } from "@/redux/features/bike/bikeApi";
import { useParams } from "react-router-dom";

const BikeDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleBikeQuery(id);
  const {
    name,
    bikeImage,
    brand,
    color,
    model,
    price,
    quantity,
    releaseDate,
    size,
    type,
  } = data?.data || {};

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>console.log(error);</div>;
  }

  return (
    <div className="w-full h-full flex justify-center p-10">
      <Card className="w-[800px] ">
        <img
          className="h-80 w-full border-b-2 mb-4"
          src={bikeImage}
          alt={name}
        />
        <CardContent>
          <p className="text-xl font-semibold">Name: {name}</p>
          <p className="text-xl font-semibold">Price: $ {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Brand: {brand}</p>
          <p>Color: {color}</p>
          <p>Model: {model}</p>
          <p>Release Date: {releaseDate}</p>
          <p>Size: {size}</p>
          <p>Type: {type}</p>
        </CardContent>
        <CardFooter>
          <div className="flex gap-3"></div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BikeDetails;
