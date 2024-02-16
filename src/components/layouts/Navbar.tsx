import { Layout } from "antd";
import { Button } from "../ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { NavLink } from "react-router-dom";
import AddBike from "@/pages/bike/AddBike";
import SalesHistoryItem from "@/pages/sell/SalesHistoryItems";

const { Header } = Layout;

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <Header
      style={{
        padding: 0,
        background: "#FFF",
        borderBottom: "1 px solid gray",
      }}
    >
      <div className="flex justify-between items-center h-full w-full">
        <div className="ml-auto lg:px-10 lg:gap-5 gap-2">
          <Button className="bg-white text-black hover:bg-green-600 hover:text-white lg:mr-3">
            <NavLink className="hover:text-white" to="/">
              Home
            </NavLink>
          </Button>
          <AddBike />
          <SalesHistoryItem />
          <Button
            onClick={() => dispatch(logout())}
            className="bg-white text-black hover:bg-green-600 hover:text-white border ml-5"
          >
            Logout
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
