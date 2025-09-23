import { Outlet } from "react-router";
import AppHeader from "./appHeader";
import Footer from "./footer";

export default function AppLayout() {
  return (
    <div className="home">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
