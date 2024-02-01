import { Layout, Menu } from "antd";
const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#FFF",
      }}
    >
      <div className="flex justify-center items-center h-16 mb-5 border-b-2">
        <h1 className="text-xl font-bold">Bike Management</h1>
      </div>
      <Menu className="bg-white " mode="inline" defaultSelectedKeys={["4"]} />
    </Sider>
  );
};

export default Sidebar;
