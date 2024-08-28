import Features from "../pages/Dashboard/Features";
import DashboardLayout from "../components/DashboardLayout";

export const userPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <DashboardLayout />,
  },
  { name: "Features", path: "reatures", element: <Features /> },
];
