import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AddBike from "@/pages/bike/AddBike";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserDashboard from "@/pages/bike/UserDashboard";
import BikeDetails from "@/pages/bike/BikeDetails";
import SalesHistory from "@/pages/sell/SalesHistory";

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
