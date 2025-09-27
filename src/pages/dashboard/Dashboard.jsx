import SideBar from "../../ui/sideBare";
import DashboardHeader from "../../ui/dashboardHeader";

import { Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <SideBar /> {/* Left column (17rem) */}
      <DashboardHeader />
      <main>
        {" "}
        {/* Right column (1fr) */}
        {/* Add your dashboard content here */}
        <Outlet />
      </main>
    </div>
  );
}
