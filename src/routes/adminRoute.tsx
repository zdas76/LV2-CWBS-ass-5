import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import ManageService from "../pages/Dashboard/ManageService";
import ManageSlote from "../pages/Dashboard/ManageSlote";
import Users from "../pages/Dashboard/Users";

export const adminPath = [
  { name: "Dashboard", path: "dashboard", element: <AdminDashboard /> },
  { name: "Manage Service", path: "manageService", element: <ManageService /> },
  { name: "Manages Users", path: "users", element: <Users /> },
  { name: "Manages Slots", path: "slots", element: <ManageSlote /> },
  
];
