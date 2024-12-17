import Features from "../pages/Dashboard/Features";
import UserDashboard from "../pages/Dashboard/UserDashboard";

export const userPath = [
  { name: "Dashboard", path: "dashboard", element: <UserDashboard /> },
  { name: "Features", path: "features", element: <Features /> },
  { name: "Booking", path: "booking", element: <Features /> },
];
