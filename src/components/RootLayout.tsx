import { NavLink, Outlet } from "react-router-dom";
import Footers from "./Footer";
import Drower from "./ui/Drower";
import { Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { currentUser, logOut } from "../redux/features/authSlice";
import { UserOutlined } from "@ant-design/icons";
import logo from "../assets/carlogo.png"
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
    key: "AboutUs",
    label: <NavLink to={"/aboutus"}>About Us</NavLink>,
  },
  {
    key: "contact",
    label: <NavLink to={"/contact"}>Contact Us</NavLink>,
  },
];

export default function RootLayout() {
  const user = useAppSelector(currentUser);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <NavLink to={`/dashboard`}>Dashboard</NavLink>,
    },
    {
      key: "2",
      label: (
        <Button type="link" onClick={() => dispatch(logOut())}>
          Log Out
        </Button>
      ),
    },
  ];

  const dispatch = useAppDispatch();
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
          className="flex items-center gap-1"
        >
          <img src={logo} alt="Logo" width={90} />
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">SCWS</h2>
        </NavLink>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={nevItems}
          className="hidden md:flex md:flex-1 justify-center text-xl "
        />
        <div className="flex flex-row gap-5 justify-center items-center">
          <div className="mt-4 cursor-pointer md:hidden">
            <Drower />
          </div>
          <div className="flex flex-col text-white">
            {user ? (
              <Dropdown
                menu={{ items }}
                placement="bottomRight"
                arrow={{ pointAtCenter: true }}
              >
                <Button className="rounded-full h-10 w-10">
                  <div>
                    <UserOutlined className="w-full" />
                  </div>
                </Button>
              </Dropdown>
            ) : (
              <NavLink to={"/login"}>Login</NavLink>
            )}
          </div>
        </div>
      </Header>
      <Layout>
        <Layout>
          {/* <ScrollToTop /> */}
          <Content className="bg-white">
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
