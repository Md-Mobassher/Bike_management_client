import { createBrowserRouter } from "react-router-dom";
import App from "../App";
<<<<<<< HEAD
import AddBike from "@/pages/bike/AddBike";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserDashboard from "@/pages/bike/UserDashboard";
import BikeDetails from "@/pages/bike/BikeDetails";
import SalesHistory from "@/pages/sell/SalesHistory";
=======
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ProtectedRoute from "@/components/layouts/ProtectedRoute";
import { routeGenerator } from "@/utils/routerGenerator";
import { sellerPaths } from "./seller.routes";
import { buyerPaths } from "./buyer.routes";
>>>>>>> private/main

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
<<<<<<< HEAD
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
=======
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
>>>>>>> private/main
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
