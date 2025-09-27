import Logo from "../assets/images/Logo-image.png";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router";

import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

export default function SideBar() {
  const location = useLocation();
  const { i18n } = useTranslation();
  return (
    <aside className="dashboard-sidebar">
      <div className="dashboard-sidebar-logo-container">
        <img src={Logo} alt="Logo" />
        <h1 className="font-bold text-xl">{i18n.t("AppName")}</h1>
      </div>
      <div className="dashboard-sidebar-links">
        <nav>
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
        </nav>
      </div>
    </aside>
  );
}
