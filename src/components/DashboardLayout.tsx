import { Outlet } from "react-router-dom";
import DashboardSitebar from "./DashboardSitebar";

export default function DashboardLayout() {
  return (
    <div className="flex ">
      <div>
        <DashboardSitebar />
      </div>
      <div className=" p-4 w-full">
        <Outlet />
      </div>
    </div>
  );
}
