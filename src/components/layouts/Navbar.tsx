import { Layout } from "antd";
import { Button } from "../ui/button";
import { logout } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
const { Header } = Layout;

const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <Header
      style={{
        padding: 0,
        background: "#F5F5F9",
        borderBottom: "1 px solid gray",
      }}
    >
      <div className="flex justify-end items-center h-full w-full px-10 gap-5">
        <Button onClick={() => dispatch(logout())} className="bg-black">
          Logout
        </Button>
      </div>
    </Header>
  );
};

export default Navbar;
