import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home";
import AddBike from "@/pages/AddBike";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "add-Bike",
        element: <AddBike />,
      },
    ],
  },
]);

export default router;
