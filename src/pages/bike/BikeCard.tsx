import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { bike } from "@/types/bike.type";

const BikeCard = ({
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
}: bike) => {
  return (
    <div>
      <div className=" p-10">
        <Card className="w-[360px] ">
          <img
            className="h-60 w-full border-b-2 mb-4"
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
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default BikeCard;
