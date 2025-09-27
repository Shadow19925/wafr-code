import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <div className="home">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
