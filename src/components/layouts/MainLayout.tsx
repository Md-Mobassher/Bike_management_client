import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content className="border border-1 bg-sky-50 border-slate-200">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
