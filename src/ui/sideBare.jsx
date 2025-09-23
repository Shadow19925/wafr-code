import Logo from "../assets/images/Logo-image.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function SideBar() {
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
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
