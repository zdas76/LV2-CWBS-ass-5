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
import ServiceDetails from "../pages/ServiceDetails";
import AboutUs from "../pages/aboutus/AboutUs";
import ContactUs from "../pages/Contact";
import PaymentPage from "../pages/payment";
import ProtectedRoute from "../components/ProtectedRoute";
import DashboardLayout from "../components/DashboardLayout";
import Reviews from "../pages/Reviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <App /> },
      { path: "home", element: <App /> },
      { path: "service", element: <Service /> },
      { path: "service/:postId", element: <ServiceDetails /> },
      { path: "reviews", element: <Reviews /> },
      { path: "booking", element: <ProtectedRoute role="user"><Booking /></ProtectedRoute> },
      { path: "payment", element: <ProtectedRoute role="user"> <PaymentPage /> </ProtectedRoute> },
      { path: "aboutus", element: <AboutUs /> },
      { path: "contact", element: <ContactUs /> },
      { path: "login", element: <Login /> },
      { path: "singup", element: <Signup /> },
      {
        path: "admin",
        element: <ProtectedRoute role="admin"><DashboardLayout /></ProtectedRoute>,
        children: routerGenerator(adminPath),
      },
      {
        path: "user",
        element: <ProtectedRoute role="user"><DashboardLayout /></ProtectedRoute>,
        children: routerGenerator(userPath),
      },
    ],
  },
]);

export default router;
