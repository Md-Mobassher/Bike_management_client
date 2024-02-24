import { TUser, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { buyerPaths } from "@/routes/buyer.routes";
import { sellerPaths } from "@/routes/seller.routes";
import { TSidebarItem } from "@/types/sidebar.type";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerators";
import { verifyToken } from "@/utils/verifyToken";
import { Layout, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
const { Sider } = Layout;

const userRole = {
  SELLER: "seller",
  BUYER: "buyer",
};

const Sidebar = () => {
  const token = useAppSelector(selectCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems: TSidebarItem[] | undefined;

  switch ((user as TUser)!.role) {
    case userRole.SELLER:
      sidebarItems = sidebarItemsGenerator(sellerPaths, userRole.SELLER);
      console.log(sidebarItems);
      break;
    case userRole.BUYER:
      sidebarItems = sidebarItemsGenerator(buyerPaths, userRole.BUYER);
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        background: "#FFF",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    >
      <div className="bg-white flex justify-center items-center py-4 mt-1 border-b-2 border-b-slate-200">
        <h1 className="text-xl font-bold">Bike Management</h1>
      </div>
      <Menu
        className="bg-white"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems as MenuItemType[]}
      />
    </Sider>
  );
};

export default Sidebar;
