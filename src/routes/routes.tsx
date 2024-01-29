import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import AddBike from "@/pages/AddBike";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import UserDashboard from "@/pages/user/UserDashboard";

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
        path: "add-Bike",
        element: <AddBike />,
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
