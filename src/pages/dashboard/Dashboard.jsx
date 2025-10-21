import SideBar from "../../ui/sideBare";
import DashboardHeader from "../../ui/dashboardHeader";

import { Outlet, Link, useLocation } from "react-router";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Dashboard() {
  const location = useLocation();

  return (
    <div className="dashboard-page">
      <SideBar>
        <ul>
          <li>
            <Link
              to="analytics"
              className={
                location.pathname === "/Dashboard/analytics" ? "active" : ""
              }
            >
              <HomeIcon />
              <p>Dashboard Home</p>
            </Link>
          </li>
          <li>
            <Link
              to="active-coupons"
              className={
                location.pathname === "/Dashboard/active-coupons"
                  ? "active"
                  : ""
              }
            >
              {" "}
              <AddShoppingCartIcon /> <p>Active Coupons</p>
            </Link>
          </li>
          <li>
            <Link
              to="upcoming-coupons"
              className={
                location.pathname === "/Dashboard/upcoming-coupons"
                  ? "active"
                  : ""
              }
            >
              {" "}
              <CardGiftcardIcon />
              <p>Upcoming Coupons</p>
            </Link>
          </li>
          <li>
            <Link
              to="settings"
              className={
                location.pathname === "/Dashboard/settings" ? "active" : ""
              }
            >
              {" "}
              <SettingsIcon /> <p>Settings</p>
            </Link>
          </li>
        </ul>
      </SideBar>{" "}
      {/* Left column (17rem) */}
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
