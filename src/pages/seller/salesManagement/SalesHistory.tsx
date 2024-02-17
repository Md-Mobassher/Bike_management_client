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
import { toast } from "sonner";

const SalesHistory = () => {
  const [salesInterval, setSalesInterval] = useState("daily");

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

  return (
    <div>
      <div className="lg:px-10 md:px-5 px-2 my-5 flex flex-wrap lg:gap-5 gap-1">
        <Button
          onClick={() => setSalesInterval("daily")}
          className="bg-violet-600 text-white "
        >
          Daily Sales
        </Button>
        <Button
          onClick={() => setSalesInterval("weekly")}
          className="bg-violet-600 text-white "
        >
          Weekly Sales
        </Button>
        <Button
          onClick={() => setSalesInterval("monthly")}
          className="bg-violet-600 text-white "
        >
          Monthly Sales
        </Button>
        <Button
          onClick={() => setSalesInterval("yearly")}
          className="bg-violet-600 text-white "
        >
          Yearly Sales
        </Button>
      </div>
      <Table className="lg:px-10 md:px-5 px-2">
        <TableCaption>
          {SalesHistory?.data?.length === 0 ? (
            <div className="text-center py-10 text-xl font-semibold ">
              No Sales Today...
            </div>
          ) : (
            <div className="text-md font-semibold">
              {" "}
              A list of Bike Sales History.
            </div>
          )}
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-slate-200">
            <TableHead className="">Buyer Name</TableHead>
            <TableHead>Bike Id</TableHead>
            <TableHead>Bike Quantity</TableHead>
            <TableHead className="text-right">Sales Date</TableHead>
            <TableHead className="text-right">Total Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SalesHistory?.data?.map((sell: any) => (
            <TableRow key={sell._id}>
              <TableCell className="font-medium">{sell.buyerName}</TableCell>
              <TableCell>{sell.bikeId}</TableCell>
              <TableCell>{sell.quantity}</TableCell>
              <TableCell className="text-right">{sell.salesDate}</TableCell>
              <TableCell className="text-right">{sell.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </div>
  );
};

export default SalesHistory;
