/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/ui/Loading";
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
import UpdateMaintenance from "./UpdateMaintenance";

const AcceptMaintenance = () => {
  const {
    data: maintenanceData,
    isLoading,
    isError,
  } = useGetAllMaintenanceQuery(undefined);
  console.log(maintenanceData);
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Error loading Maintenance. Please try again later.</div>;
  }

  return (
    <div className="lg:p-10 md:p-8 p-5">
      <h1 className="text-2xl font-bold text-center text-green-500 mb-7">
        Maintenance Request
      </h1>
      <Table className="lg:px-10 md:px-5 px-2 pb-10 mx-auto ">
        <TableCaption>
          {maintenanceData.data.length === 0 ? (
            <div className="text-center py-10 text-xl font-semibold ">
              No Maintenance Request...
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
            <TableHead className=" text-white">Discount %</TableHead>
            <TableHead className=" text-white">Total</TableHead>
            <TableHead className="text-right text-white">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {maintenanceData.data.map((maintenance: any) => (
            <TableRow
              key={maintenance._id}
              className="bg-purple-100  hover:bg-white border-b border-green-200"
            >
              <TableCell className="font-medium">
                {maintenance?.bikeId?.bikeId}
              </TableCell>
              <TableCell className="font-medium">
                {maintenance.buyerId.name}
              </TableCell>
              <TableCell>{maintenance.lastServicingDate}</TableCell>
              <TableCell>{maintenance.nextServicingDate}</TableCell>
              <TableCell className="text-start">
                {maintenance?.serviceDetails?.map(
                  (item: string, index: number) => (
                    <ul key={(index = index + 1)}>
                      <li className="list-item">{item}</li>
                    </ul>
                  )
                )}
              </TableCell>
              <TableCell className="">
                {maintenance?.notes ? <p>{maintenance.notes}</p> : "---"}
              </TableCell>
              <TableCell className="">
                {maintenance?.isPending ? (
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
                {maintenance?.discount?.percentage} %
              </TableCell>
              <TableCell className="text-right">
                {maintenance?.discount?.fixedAmount}
              </TableCell>
              <TableCell className="text-right">
                <UpdateMaintenance id={maintenance?._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {maintenanceData.data.length}
    </div>
  );
};

export default AcceptMaintenance;
