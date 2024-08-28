import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../Utils/sitebarItemGenerator";
import { adminPath } from "../routes/adminRoute";
import { userPath } from "../routes/userRoute";
import { Menu } from "antd";



  return (
    <Sider
      breakpoint="lg"
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
        <h1>PhU</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sitebarItems}
      />
    </Sider>
  );
}
