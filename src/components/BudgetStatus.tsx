const BudgetStatus = () => {
  return (
    <div
      style={{
        //   background: "white",
        padding: "10px 40px",
        borderRadius: "8px",
        marginTop: "20px",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Budget Status</h3>
      <button
        style={{
          padding: "10px",
          marginRight: "10px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Add New Project
      </button>
      <button
        style={{
          padding: "10px",
          marginRight: "10px",
          background: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Download Report
      </button>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        {["Insurance App", "Neo", "VR Website", "VR Website"].map(
          (project, index) => (
            <div
              key={index}
              style={{
                background: "#eee",
                padding: "15px",
                flex: "1",
                margin: "5px",
                borderRadius: "8px",
              }}
            >
              <h4>{project}</h4>
              <p>Total Budget: 70,000€</p>
              <p>Profitability: 100%</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BudgetStatus;
