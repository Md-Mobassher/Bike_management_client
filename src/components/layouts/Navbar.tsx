import { Layout } from "antd";
import { Button } from "../ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { NavLink } from "react-router-dom";
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
      <div className="flex justify-between items-center h-full w-full px-10 gap-5">
        <div></div>
        <div className="gap-3">
          <NavLink
            className="cursor-pointer text-md font-semibold mr-5 px-3 py-2 "
            to="/"
          >
            Home
          </NavLink>
          <Button onClick={() => dispatch(logout())} className="">
            Logout
          </Button>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
