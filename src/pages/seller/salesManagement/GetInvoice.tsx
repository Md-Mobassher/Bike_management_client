import { useParams } from "react-router-dom";
import { useGetInvoiceQuery } from "@/redux/features/sell/sellApi";
import Loading from "@/components/ui/Loading";
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
import { Button } from "@/components/ui/button";

const GetInvoice = () => {
  const { id } = useParams();
  // const [pdfDocument, setPdfDocument] = useState(null);

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

  const sellerInfo = sellerId || {};
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

  // const handleDownloadPDF = () => {
  //   if (pdfDocument) {
  //     pdfDocument.save("invoice.pdf");
  //   }
  // };

  // const handlePrintInvoice = () => {
  //   window.print();
  // };

  // const generatePDF = () => {
  //   const pdf = new jsPDF({
  //     unit: "mm",
  //     format: "a4",
  //     orientation: "portrait",
  //   });

  //   // Add content to the PDF
  //   pdf.text("Invoice", 105, 10, "center");
  //   invoiceItems.forEach((item, index) => {
  //     pdf.text(
  //       `${index + 1}. ${item.bikeName} - ${
  //         item.quantity
  //       } x $${item.price.toFixed(2)}`,
  //       10,
  //       20 + index * 10
  //     );
  //     // Add any additional relevant information here
  //   });

  //   setPdfDocument(pdf);
  // };

  return (
    <div className="p-10">
      <div className="flex justify-between">
        <Button className="bg-green-600 hover:bg-green-400 ">
          Download PDF
        </Button>
        <Button className="bg-green-600  hover:bg-green-400 ">Print</Button>
      </div>
      <div className="lg:max-w-3xl lg:h-[1000px]  md:max-w-2xl max-w-xl  md:h-[800px] mx-auto mt-8 lg:p-8 md:p-6 p-5 bg-white shadow-md rounded-md  h-auto my-20">
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

              <p>{sellerInfo.name}</p>
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
            {/* {invoices.map((invoice) => ( */}
            <TableRow key={bikeUId}>
              <TableCell colSpan={2} className="font-medium">
                {bikeUId}
              </TableCell>
              <TableCell>{price}</TableCell>
              <TableCell className="text-center">{quantity}</TableCell>
              <TableCell className="text-right">{totalAmount}</TableCell>
            </TableRow>
            {/* ))} */}
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
};

export default GetInvoice;
