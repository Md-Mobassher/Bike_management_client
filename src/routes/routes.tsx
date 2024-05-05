import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import { routeGenerator } from "@/utils/routerGenerator";
import { sellerPaths } from "./seller.routes";
import { buyerPaths } from "./buyer.routes";
import UserDashboard from "@/pages/bike/UserDashboard";
import BikeDetails from "@/pages/buyer/BikeManagement/BikeDetails";
import AddBikeModal from "@/pages/seller/bikeManagement/AddBike";
import SalesHistory from "@/pages/seller/salesManagement/SalesHistory";

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
        element: <AddBikeModal />,
      },
      {
        path: "sales-history",
        element: <SalesHistory />,
      },
    ],
  },
  {
    path: "/seller",
    element: (
      <ProtectedRoute role="seller">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(sellerPaths),
  },

  {
    path: "/buyer",
    element: (
      <ProtectedRoute role="buyer">
        <App />
      </ProtectedRoute>
    ),
    children: routeGenerator(buyerPaths),
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
