import { NavLink, Outlet } from "react-router-dom";
import Footers from "./Footer";
import Drower from "./ui/Drower";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

export const nevItems = [
  {
    key: "Home",
    label: <NavLink to={"/home"}>Home</NavLink>,
  },
  {
    key: "Service",
    label: <NavLink to={"/service"}>Service</NavLink>,
  },
  {
    key: "Booking",
    label: <NavLink to={"/booking"}>Booking</NavLink>,
  },
  {
    key: "Login",
    label: <NavLink to={"/login"}>Login</NavLink>,
  },
];

export default function RootLayout() {
  return (
    <Layout className="">
      <Header className="flex justify-between w-full items-center">
        <NavLink
          to="/"
          style={{
            color: "white",
            padding: "5px 30px",
            fontSize: "25px",
          }}
        >
          <img src="icons/Logo.png" alt="Logo" width={90} />
        </NavLink>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={nevItems}
          className="hidden md:flex md:flex-1 justify-center text-xl "
        />
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="flex flex-col text-white">
            <NavLink to="/dashboard">Dashboard</NavLink>
          </div>
          <div className=" mt-4 cursor-pointer">
            <Drower />
          </div>
        </div>
      </Header>
      <Layout>
        <Layout>
          {/* <ScrollToTop /> */}
          <Content className="">
            <Outlet />
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
            fontSize: "13px",
          }}
        >
          <Footers />
        </Footer>
      </Layout>
      {/* <Gotop /> */}
    </Layout>
  );
}
