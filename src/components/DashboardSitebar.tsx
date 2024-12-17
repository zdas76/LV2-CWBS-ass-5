import { Menu } from "antd";
import { currentUser } from "../redux/features/authSlice";
import { useAppSelector } from "../redux/hooks";
import { adminPath } from "../routes/adminRoute";
import { userPath } from "../routes/userRoute";
import { sidebarItemsGenerator } from "../Utils/sitebarItemGenerator";
import Sider from "antd/es/layout/Sider";

export default function DashboardSitebar() {
  const userRole = {
    ADMIN: "admin",
    USER: "user",
  };

  const user = useAppSelector(currentUser);

  let sidebarItems;

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPath);
      break;

    case userRole.USER:
      sidebarItems = sidebarItemsGenerator(userPath);
      break;

    default:
      break;
  }

  return (
    <div>
      <Sider
        // breakpoint="lg"
        collapsedWidth="0"
        style={{ height: "100vh", position: "sticky", top: "0", left: "0" }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>{user?.name}</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={sidebarItems}
        />
      </Sider>
    </div>
  );
}
