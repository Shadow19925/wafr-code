import UserAvatar from "./Avater";
import { useLocation } from "react-router";
import HomeIcon from "@mui/icons-material/Home";

export default function DashboardHeader() {
  const location = useLocation();
  const currentPath =
    location.pathname.split("/")[2] === "analytics"
      ? "Home"
      : location.pathname.split("/")[2];

  return (
    <div>
      <div className="dashboard-header-content">
        <h1>
          Dashboard \ {currentPath === "Home" ? <HomeIcon /> : currentPath}
        </h1>
        <UserAvatar />
      </div>
    </div>
  );
}
