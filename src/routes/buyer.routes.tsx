import BuyerDashboard from "@/pages/buyer/BuyerDashboard";
import AddBikeModal from "@/pages/seller/bikeManagement/AddBike";

export const buyerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <BuyerDashboard />,
  },
  {
    name: "Bike Management",
    children: [
      {
        name: "Add New Bike",
        path: "add-bike",
        element: <AddBikeModal />,
      },
    ],
  },
];
