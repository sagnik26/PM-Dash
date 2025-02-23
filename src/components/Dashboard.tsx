import BudgetStatus from "./BudgetStatus";
import Charts from "./Charts";
import Header from "./Header";
import Metrics from "./Metrics";
import TeamsMood from "./TeamsMood";

const Dashboard = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f4f4f4",
        width: "100%",
        height: "100vh",
      }}
    >
      {/* Header */}
      <Header />

      {/* Main Dashboard */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
          padding: "10px 40px",
        }}
      >
        {/* Left Section */}
        <div style={{ flex: "3" }}>
          {/* Metrics */}
          <Metrics />

          {/* Graphs Section */}
          <Charts />
        </div>

        {/* Right Section: Team Mood */}
        <TeamsMood />
      </div>

      {/* Budget Status */}
      <BudgetStatus />
    </div>
  );
};

export default Dashboard;
