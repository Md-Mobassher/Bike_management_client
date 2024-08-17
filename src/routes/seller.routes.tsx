import SellerDashboard from "@/pages/seller/SellerDashboard";
import AddBike from "@/pages/seller/bikeManagement/AddBike";
import BulkDeleteBike from "@/pages/seller/bikeManagement/BulkDeleteBike";
import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";
import UpdateBike from "@/pages/seller/bikeManagement/UpdateBike";
import DuplicateBike from "@/pages/seller/bikeManagement/DuplicateBike";
import GetInvoice from "@/pages/seller/salesManagement/GetInvoice";
import AcceptMaintenance from "@/pages/seller/maintenanceManagement/AcceptMaintenance";
import AllBikes from "@/pages/seller/bikeManagement/AllBikes";

export const sellerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <SellerDashboard />,
  },
  {
    name: "Bike Management",
    children: [
      {
        name: "See All Bikes",
        path: "all-bikes",
        element: <AllBikes />,
      },
      {
        name: "Add New Bike",
        path: "add-bike",
        element: <AddBike />,
      },
      {
        name: "Bulk Delete Bike",
        path: "bulk-delete-bike",
        element: <BulkDeleteBike />,
      },
      {
        path: "update-bike/:id",
        element: <UpdateBike />,
      },
      {
        path: "duplicate-bike/:id",
        element: <DuplicateBike />,
      },
    ],
  },
  {
    name: "Sales Management",
    children: [
      {
        name: "Sales History",
        path: "sales-history",
        element: <SalesHistory />,
      },
      {
        path: "get-invoice/:id",
        element: <GetInvoice />,
      },
    ],
  },
  {
    name: "Bike Maintenance",
    children: [
      {
        name: "Maintenance Request",
        path: "maintenance",
        element: <AcceptMaintenance />,
      },
    ],
  },
];
