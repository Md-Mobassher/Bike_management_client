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
import { useLocation } from "react-router-dom";

const SalesHistory = () => {
  const location = useLocation();
  const salesHistory = location.state?.sells || [];
  console.log(salesHistory);

  return (
    <Table className="w-11/12 mx-auto">
      <TableCaption>A list of Bike Sales History.</TableCaption>
      <TableHeader>
        <TableRow className="bg-slate-200">
          <TableHead className="">Buyer Name</TableHead>
          <TableHead>Bike Id</TableHead>
          <TableHead>Bike Quantity</TableHead>
          <TableHead className="text-right">Sales Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {salesHistory.map((sell: any) => (
          <TableRow key={sell._id}>
            <TableCell className="font-medium">{sell.buyerName}</TableCell>
            <TableCell>{sell.bikeId}</TableCell>
            <TableCell>{sell.quantity}</TableCell>
            <TableCell className="text-right">{sell.salesDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
};

export default SalesHistory;
