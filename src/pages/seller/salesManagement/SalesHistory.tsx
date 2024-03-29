/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetSellHistoryQuery } from "@/redux/features/sell/sellApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const SalesHistory = () => {
  const [salesInterval, setSalesInterval] = useState("daily");
  const navigate = useNavigate();
  const {
    data: SalesHistory,
    isLoading,
    isError,
  } = useGetSellHistoryQuery(salesInterval);
  console.log(SalesHistory);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    toast.error("Error Getting Sales History. Please try again.");
  }

  const handleGetInvoice = (id: string) => {
    navigate(`/seller/get-invoice/${id}`);
  };

  return (
    <div className="lg:p-10 md:p-8 p-5">
      <div className=" px-2 lg:my-5 flex flex-wrap lg:justify-between md:justify-between justify-center gap-5 items-center">
        <div>
          <h1 className="text-2xl font-bold text-center text-green-500 lg:mb-6 mb-4">
            Sales history
          </h1>
        </div>
        <div className=" flex flex-wrap justify-center lg:gap-5 gap-2 mb-5">
          <Button
            onClick={() => setSalesInterval("daily")}
            className="bg-green-500 hover:bg-green-400 text-white "
          >
            Daily Sales
          </Button>
          <Button
            onClick={() => setSalesInterval("weekly")}
            className="bg-green-500 hover:bg-green-400 text-white "
          >
            Weekly Sales
          </Button>
          <Button
            onClick={() => setSalesInterval("monthly")}
            className="bg-green-500 hover:bg-green-400 text-white "
          >
            Monthly Sales
          </Button>
          <Button
            onClick={() => setSalesInterval("yearly")}
            className="bg-green-500 hover:bg-green-400 text-white "
          >
            Yearly Sales
          </Button>
        </div>
      </div>
      <Table className="lg:px-10 md:px-5 px-2 pb-10 mx-auto ">
        <TableCaption>
          {SalesHistory?.data?.length === 0 ? (
            <div className="text-center py-10 text-xl font-semibold ">
              No Sales Today...
            </div>
          ) : (
            <div className="text-md font-semibold my-10">
              {" "}
              A list of Bike Sales History.
            </div>
          )}
        </TableCaption>
        <TableHeader className="bg-green-400">
          <TableRow className="bg-green-400 hover:bg-green-300">
            <TableHead className="text-white">Buyer Name</TableHead>
            <TableHead className=" text-center text-white">Bike Id</TableHead>
            <TableHead className="text-start text-white">
              Bike Quantity
            </TableHead>
            <TableHead className="text-right  text-white">Sales Date</TableHead>
            <TableHead className="text-right  text-white">
              Total Amount
            </TableHead>
            <TableHead className="text-right text-white">Get Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SalesHistory?.data?.map((sell: any) => (
            <TableRow
              key={sell._id}
              className="bg-purple-100  hover:bg-white border-b border-green-200"
            >
              <TableCell className="font-medium">{sell.buyerName}</TableCell>
              <TableCell>{sell.bikeId}</TableCell>
              <TableCell>{sell.quantity}</TableCell>
              <TableCell className="text-right">{sell.salesDate}</TableCell>
              <TableCell className="text-right">{sell.totalAmount}</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleGetInvoice(sell._id)}
                  className="bg-green-500 hover:bg-green-400 text-white"
                >
                  Get Invoice
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default SalesHistory;
