/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/ui/Loading";
import { Button } from "@/components/ui/button";
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
    <div>
      <div className="lg:px-14 md:px-5 px-2 my-5 flex flex-wrap lg:gap-5 gap-1">
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
        <TableHeader>
          <TableRow className="bg-slate-400 hover:bg-green-400">
            <TableHead className="text-white">Buyer Name</TableHead>
            <TableHead className=" text-center text-white">Bike Id</TableHead>
            <TableHead className="text-start text-white">
              Bike Quantity
            </TableHead>
            <TableHead className="text-right  text-white">Sales Date</TableHead>
            <TableHead className="text-right  text-white">
              Total Amount
            </TableHead>
            <TableHead className="text-right text-white">Invoice</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SalesHistory?.data?.map((sell: any) => (
            <TableRow key={sell._id} className="bg-purple-100  hover:bg-white">
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
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
};

export default SalesHistory;
