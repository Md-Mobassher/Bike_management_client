import BikeDetails from "@/pages/buyer/BikeManagement/BikeDetails";
import RequestMaintenance from "@/pages/buyer/BikeManagement/RequestMaintenance";
import BuyerDashboard from "@/pages/buyer/BuyerDashboard";

export const buyerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <BuyerDashboard />,
  },
  {
    path: "request-maintenance/:id",
    element: <RequestMaintenance />,
  },
  {
    path: "bikes/:id",
    element: <BikeDetails />,
  },
  // {
  //   name: "Bike Management",
  //   children: [],
  // },
];
