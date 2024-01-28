import { Button, Layout } from "antd";
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
      <div className="flex justify-end items-center h-full w-full px-10">
        <Button>Login</Button>
        <Button>Registration</Button>
      </div>
    </Header>
  );
};

export default Navbar;
