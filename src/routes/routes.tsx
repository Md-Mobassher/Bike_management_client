import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBike from "@/pages/seller/bike/AddBike";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserDashboard from "@/pages/seller/bike/UserDashboard";
import BikeDetails from "@/pages/seller/bike/BikeDetails";
import SalesHistory from "@/pages/seller/sales/SalesHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <UserDashboard />,
      },
      {
        path: "/bike/:id",
        element: <BikeDetails />,
      },
      {
        path: "add-Bike",
        element: <AddBike />,
      },
      {
        path: "sales-history",
        element: <SalesHistory />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
