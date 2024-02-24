import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { TBike } from "@/types/bike.type";

const BuyerBikeCard = ({
  _id,
  bikeId,
  name,
  bikeImage,
  brand,
  color,
  model,
  price,
  quantity,
  gearType,
  material,
  suspensionType,
}: TBike) => {
  const navigate = useNavigate();

  // bike details
  const handleBikeDetails = (id: string) => {
    navigate(`/buyer/bikes/${id}`);
  };
  const handleRequestMaintenance = (id: string) => {
    navigate(`/buyer/request-maintenance/${id}`);
  };

  return (
    <Card className="sm:max-w-[400px] ">
      <img
        className="h-60 w-full border-b-2 mb-4 rounded-t-md"
        src={bikeImage}
        alt={name}
      />
      <CardContent>
        <div>
          <div className="flex flex-wrap justify-between">
            <p className="text-xl font-bold">
              <span className="text-green-500">{name}</span>
            </p>
            <p className="text-lg font-semibold">
              ID:{" "}
              <span className="text-xl font-bold text-green-400">{bikeId}</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-between py-2">
            <p className="text-lg font-semibold">
              Price:{" "}
              <span className="text-xl font-bold text-green-400">
                $ {price}
              </span>
            </p>
            <p className="text-lg font-semibold">
              Quantity:{" "}
              <span className="text-xl font-bold text-green-400">
                {quantity}
              </span>
            </p>
          </div>

          <div className="flex justify-between">
            <div className="flex flex-col justify-start">
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
            </div>
            <div className="flex flex-col items-end">
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
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 flex-wrap">
        <Button className="bg-green-600" onClick={() => handleBikeDetails(_id)}>
          Details
        </Button>
        <Button
          className="bg-green-600"
          onClick={() => handleRequestMaintenance(_id)}
        >
          Request Maintenance
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BuyerBikeCard;
