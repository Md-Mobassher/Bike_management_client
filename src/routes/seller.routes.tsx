import SellerDashboard from "@/pages/seller/SellerDashboard";
import FilterBike from "@/pages/seller/bikeManagement/FilterBike";
import SalesHistoryItem from "@/pages/seller/salesManagement/SalesHistoryItems";
import AddBike from "@/pages/seller/bikeManagement/AddBike";
import BulkDeleteBike from "@/pages/seller/bikeManagement/BulkDeleteBike";
import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";

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
        element: <SellerDashboard />,
      },
      {
        name: "Bulk Delete Bike",
        path: "bulk-delete-bike",
        element: <BulkDeleteBike />,
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
