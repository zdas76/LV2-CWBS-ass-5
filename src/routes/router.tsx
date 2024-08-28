import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import App from "../App";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Service from "../pages/Service";
import Booking from "../pages/Booking";
import Dashboard from "../pages/Dasboard";
import { routerGenerator } from "../Utils/routerGenerator";
import { adminPath } from "./adminRoute";
import { userPath } from "./userRoute";
import Reviews from "../pages/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <App /> },
      { path: "service", element: <Service /> },
      { path: "booking", element: <Booking /> },
      { path: "reviews", element: <Reviews /> },
      { path: "login", element: <Login /> },
      { path: "singup", element: <Signup /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "admin",
            element: <Dashboard />,
            children: routerGenerator(adminPath),
          },
          {
            path: "user",
            element: <Dashboard />,
            children: routerGenerator(userPath),
          },
        ],
      },
    ],
  },
]);

export default router;
