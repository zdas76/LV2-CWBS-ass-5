import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Service from "../pages/Service";
import Booking from "../pages/Booking";
import { routerGenerator } from "../Utils/routerGenerator";
import { adminPath } from "./adminRoute";
import { userPath } from "./userRoute";
import Reviews from "../pages/Reviews";
import Dashboard from "../pages/Dasboard";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <App /> },
      { path: "service", element: <Service /> },
      { path: "booking", element: <Booking /> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
      { path: "reviews", element: <Reviews /> },
      { path: "login", element: <Login /> },
      { path: "singup", element: <Signup /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: routerGenerator(adminPath),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: routerGenerator(userPath),
      },
    ],
  },
]);

export default router;
