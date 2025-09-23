import SideBar from "../../ui/sideBare";

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <SideBar /> {/* Left column (17rem) */}
      <main>
        {" "}
        {/* Right column (1fr) */}
        <header>Header</header> {/* Dynamic header inside main */}
        <h1>Dashboard</h1>
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
}
