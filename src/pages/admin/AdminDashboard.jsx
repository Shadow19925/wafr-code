import { Outlet, Link } from "react-router";
import SideBar from "../../ui/sideBare";
import DashboardHeader from "../../ui/dashboardHeader";

import SettingsIcon from "@mui/icons-material/Settings";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
import ContentPasteGoOutlinedIcon from "@mui/icons-material/ContentPasteGoOutlined";

export default function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <SideBar>
        <ul>
          <li>
            <Link to="analytics">
              <AnalyticsOutlinedIcon />
              <p>Admin Analytics</p>
            </Link>
          </li>
          <li>
            <Link to="coupons">
              <BookOnlineOutlinedIcon />
              <p>Coupons Management</p>
            </Link>
          </li>
          <li>
            <Link to="users">
              <ManageAccountsOutlinedIcon />
              <p>Users Management</p>
            </Link>
          </li>
          <li>
            <Link to="stores">
              {" "}
              <StoreMallDirectoryOutlinedIcon />
              <p>Stores Management</p>
            </Link>
          </li>
          <li>
            <Link to="users">
              <ContentPasteGoOutlinedIcon />
              <p>Reports</p>
            </Link>
          </li>
          <li>
            <Link to="stores">
              {" "}
              <PermMediaOutlinedIcon />
              <p>File Library</p>
            </Link>
          </li>
          <li>
            <Link to="site-settings">
              {" "}
              <SettingsIcon /> <p>Site Settings</p>
            </Link>
          </li>
        </ul>
      </SideBar>
      {/* Left column (17rem) */}
      <DashboardHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
