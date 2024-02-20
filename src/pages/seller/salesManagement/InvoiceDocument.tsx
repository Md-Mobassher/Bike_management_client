/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const InvoiceDocument = ({
  isPaymentComplete,
  name,
  bikeUId,
  salesDate,
  buyerName,
  sellerName,
  totalAmount,
  quantity,
  price,
  suspensionType,
  gearType,
  material,
  type,
  size,
  releaseDate,
  model,
  brand,
  color,
}: Record<string, any>) => (
  <div className=" printable-section">
    <div className="lg:max-w-3xl lg:h-[900px]  md:max-w-2xl max-w-xl  md:h-[800px] mx-auto mt-8 lg:p-10 md:p-8 p-5 bg-white shadow-md rounded-md  h-auto my-20">
      <div className="flex justify-between items-start lg:mb-6 mb-3">
        <h2 className="text-2xl font-bold text-green-500">
          Invoice #{bikeUId}
        </h2>
        <div className="text-gray-500 flex flex-col items-end mt-2">
          <p className="text-sm text-gray-600">Sales Date: {salesDate}</p>
          <p> Payment Status: {isPaymentComplete ? "Paid" : "Pending"}</p>
        </div>
      </div>

      <div className="lg:my-10 my-4">
        <div className="flex justify-between mb-2">
          <div>
            <p className="text-md font-bold text-gray-600 text-start mb-1">
              Buyer Name
            </p>
            <p className="">{buyerName}</p>
          </div>
          <div>
            <p className="text-md font-bold text-gray-600 text-end mb-1">
              Seller Name
            </p>

            <p>{sellerName}</p>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-md font-bold text-gray-600 text-start mb-1">
          Bike Details
        </p>
        <div className="flex flex-wrap lg:gap-5 md:gap-5 justify-between items-start ">
          <div>
            <p>Bike Name: {name}</p>
            <p>Brand: {brand}</p>
            <p>Color: {color}</p>
            <p>Model: {model}</p>
          </div>

          <div>
            <p>Release Date: {releaseDate}</p>
            <p>Size: {size}</p>
            <p>Type: {type}</p>
          </div>
          <div>
            <p>Material: {material}</p>
            <p>Gear Type: {gearType}</p>
            <p>Suspention Type: {suspensionType}</p>
          </div>
        </div>
      </div>

      <Table className="mt-10">
        <TableCaption className="text-gray-500 text-sm mt-10">
          Thank you for your purchase!
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-100">
            <TableHead colSpan={2} className="w-[100px]">
              Bike ID
            </TableHead>
            <TableHead>Unit Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow key={bikeUId}>
            <TableCell colSpan={2} className="font-medium">
              {bikeUId}
            </TableCell>
            <TableCell>{price}</TableCell>
            <TableCell className="text-center">{quantity}</TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow className="bg-slate-100">
            <TableCell colSpan={4} className="text-right">
              Total
            </TableCell>
            <TableCell className="text-right">{totalAmount}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  </div>
);

export default InvoiceDocument;
