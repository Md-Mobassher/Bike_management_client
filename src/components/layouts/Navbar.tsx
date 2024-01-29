import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        padding: 0,
        background: "#F5F5F9",
        borderBottom: "1 px solid gray",
      }}
    >
      <div className="flex justify-end items-center h-full w-full px-10 gap-5">
        <Button className="bg-black">
          <NavLink to="/login">Login</NavLink>
        </Button>
        <Button>
          <NavLink to="/register">Registration</NavLink>
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
