import SellerDashboard from "@/pages/seller/SellerDashboard";
import FilterBike from "@/pages/seller/bikeManagement/FilterBike";
import AddBike from "@/pages/seller/bikeManagement/AddBike";
import BulkDeleteBike from "@/pages/seller/bikeManagement/BulkDeleteBike";
import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";
import UpdateBike from "@/pages/seller/bikeManagement/UpdateBike";

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
    ],
  },
  {
    name: "Sales Management",
    children: [
      {
        name: "Sell A Bike",
        path: "sell-bike",
        element: <AddBike />,
      },
      {
        name: "Sales History",
        path: "sales-history",
        element: <SalesHistory />,
      },
    ],
  },
  {
    name: "Bike Filtering",
    children: [
      {
        name: "Filter Bikes",
        path: "filter-bikes",
        element: <FilterBike />,
      },
    ],
  },
];
