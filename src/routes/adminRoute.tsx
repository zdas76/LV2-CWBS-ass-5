import ManageService from "../pages/Dashboard/ManageService";
import Order from "../pages/Dashboard/Order";
import Users from "../pages/Dashboard/Users";

export const adminPath = [
  { name: "Manage Service", path: "manageService", element: <ManageService /> },
  { name: "Manages Users", path: "users", element: <Users /> },
  {
    name: "Manage Order",
    children: [{ name: "All Order", path: "allOrder", element: <Order /> }],
  },
];
