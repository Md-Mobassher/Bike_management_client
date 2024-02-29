import BikeDetails from "@/pages/buyer/BikeManagement/BikeDetails";
import RequestMaintenance from "@/pages/buyer/BikeManagement/RequestMaintenance";
import RequestedMaintenance from "@/pages/buyer/BikeManagement/RequestedMaintenance";
import BuyerDashboard from "@/pages/buyer/BuyerDashboard";

export const buyerPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <BuyerDashboard />,
  },
  {
    name: "Requested Maintenance",
    path: "requested-maintenance",
    element: <RequestedMaintenance />,
  },
  {
    path: "request-maintenance/:id",
    element: <RequestMaintenance />,
  },
  {
    path: "bikes/:id",
    element: <BikeDetails />,
  },
];
