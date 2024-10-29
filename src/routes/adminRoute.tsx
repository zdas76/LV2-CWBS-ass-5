import ManageService from "../pages/Dashboard/ManageService";
import ManageSlote from "../pages/Dashboard/ManageSlote";
import Order from "../pages/Dashboard/Order";
import Users from "../pages/Dashboard/Users";

export const adminPath = [
  { name: "Manage Service", path: "manageService", element: <ManageService /> },
  { name: "Manages Users", path: "users", element: <Users /> },
  { name: "Manages Slots", path: "slots", element: <ManageSlote /> },
  { name: "Manages Order", path: "allOrder", element: <Order /> },
  
];
