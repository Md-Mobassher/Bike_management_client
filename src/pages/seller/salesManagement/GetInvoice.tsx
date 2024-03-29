import { useParams } from "react-router-dom";
import { useGetInvoiceQuery } from "@/redux/features/sell/sellApi";
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import InvoiceDocument from "./InvoiceDocument";

const GetInvoice = () => {
  const { id } = useParams();
  const { data: InvoiceData, isLoading, isError } = useGetInvoiceQuery(id);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>console.log(error);</div>;
  }

  const {
    sellerId,
    bikeId,
    quantity,
    buyerName,
    salesDate,
    isPaymentComplete,
    totalAmount,
  } = InvoiceData?.data || {};

  const { name: sellerName } = sellerId || {};
  const {
    name,
    brand,
    color,
    size,
    model,
    bikeId: bikeUId,
    releaseDate,
    type,
    price,
    suspensionType,
    material,
    gearType,
  } = bikeId || {};

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-10">
      <div className=" lg:px-10">
        <Button
          className="bg-green-600 hover:bg-green-400 px-10"
          onClick={handlePrint}
        >
          Print
        </Button>
      </div>

      <InvoiceDocument
        bikeUId={bikeUId}
        salesDate={salesDate}
        buyerName={buyerName}
        sellerName={sellerName}
        isPaymentComplete={isPaymentComplete}
        name={name}
        totalAmount={totalAmount}
        quantity={quantity}
        price={price}
        suspensionType={suspensionType}
        gearType={gearType}
        material={material}
        type={type}
        size={size}
        releaseDate={releaseDate}
        model={model}
        brand={brand}
        color={color}
      />

      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .printable-section, .printable-section * {
              visibility: visible;
              border: none;
              box-shadow: none;
              margin:10px, 0;
              padding:0
            }
            .printable-section {
              position: absolute;
              left: 0;
              top: 0;
              right:0;
              bottom:0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GetInvoice;
