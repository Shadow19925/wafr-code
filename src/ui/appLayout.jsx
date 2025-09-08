import { Outlet } from "react-router";
import AppHeader from "./appHeader";
import Footer from "./footer/footer";

export default function AppLayout() {
  return (
    <div className="home">
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
