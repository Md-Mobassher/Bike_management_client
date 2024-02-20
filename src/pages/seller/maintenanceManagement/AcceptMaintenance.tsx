/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useGetAllMaintenanceQuery } from "@/redux/features/maintenance/maintenanceApi";

const AcceptMaintenance = () => {
  const { data: maintenanceData } = useGetAllMaintenanceQuery(undefined);
  console.log(maintenanceData);
  return (
    <div className="lg:p-10 md:p-8 p-5">
      <h1 className="text-2xl font-bold text-center text-green-500 mb-7">
        Maintenance Request
      </h1>
      <Table className="lg:px-10 md:px-5 px-2 pb-10 mx-auto ">
        <TableCaption>
          {maintenanceData?.data?.length === 0 ? (
            <div className="text-center py-10 text-xl font-semibold ">
              No Maintenance Data...
            </div>
          ) : (
            <div className="text-md font-semibold my-10">
              {" "}
              A list of Bike Maintenance Request.
            </div>
          )}
        </TableCaption>
        <TableHeader className="bg-green-400">
          <TableRow className="">
            <TableHead className="text-white">BikeId</TableHead>
            <TableHead className="text-white">Buyer Name</TableHead>
            <TableHead className=" text-start text-white">
              Last Service
            </TableHead>
            <TableHead className="text-start text-white">
              Next Service
            </TableHead>
            <TableHead className="text-start  text-white">
              Service Details
            </TableHead>
            <TableHead className="  text-white">Notes</TableHead>
            <TableHead className=" text-white">Status</TableHead>
            <TableHead className="text-right text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {maintenanceData?.data?.map((maintenance: any) => (
            <TableRow
              key={maintenance._id}
              className="bg-purple-100  hover:bg-white border-b border-green-200"
            >
              <TableCell className="font-medium">
                {maintenance.bikeId.bikeId}
              </TableCell>
              <TableCell className="font-medium">
                {maintenance.buyerId.name}
              </TableCell>
              <TableCell>{maintenance.lastServicingDate}</TableCell>
              <TableCell>{maintenance.nextServicingDate}</TableCell>
              <TableCell className="text-start">
                {maintenance.serviceDetails.map((item: string) => (
                  <ul>
                    <li className="list-item">{item}</li>
                  </ul>
                ))}
              </TableCell>
              <TableCell className="">
                {maintenance.notes ? <p>{maintenance.notes}</p> : "---"}
              </TableCell>
              <TableCell className="">
                {maintenance.isPending ? (
                  <p className="border border-green-300 bg-yellow-200 hover:bg-slate-300 rounded-lg p-1 text-center  ">
                    Pending
                  </p>
                ) : (
                  <p className="border border-green-300 bg-green-300 hover:bg-slate-300 rounded-lg p-1 text-center  ">
                    Accepted
                  </p>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Button className="bg-green-500 hover:bg-green-400 text-white">
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AcceptMaintenance;
