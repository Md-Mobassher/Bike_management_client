import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content
          style={{
            backgroundColor: "white",
            margin: "10px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
