import { Layout } from "antd";
import { Button } from "../ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { NavLink } from "react-router-dom";
import AddBike from "@/pages/bike/AddBike";
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
        <div className="ml-auto px-10 gap-5">
          <Button className="bg-white text-black hover:bg-green-600 hover:text-white mr-3">
            <NavLink className="hover:text-white" to="/">
              Home
            </NavLink>
          </Button>
          <AddBike />
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
