import { Layout, Menu } from "antd";
import FilterBike from "../../pages/bike/FilterBike";
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
      <Menu className="px-3" mode="inline" defaultSelectedKeys={["4"]}>
        <FilterBike />
      </Menu>
    </Sider>
  );
};

export default Sidebar;
