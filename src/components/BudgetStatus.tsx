const projects = [
  {
    name: "Insurance App",
    company: "Verit",
    budget: "70,000€",
    profitability: "100%",
    balance: "-2,500€",
    actualHours: "1,100",
    status: "Over Budget",
    statusColor: "#E74C3C",
  },
  {
    name: "Neo",
    company: "Bankia",
    budget: "70,000€",
    profitability: "100%",
    balance: "4,000€",
    actualHours: "1,000",
    status: "On Budget",
    statusColor: "#F1C40F",
  },
  {
    name: "VR Website",
    company: "Barça",
    budget: "70,000€",
    profitability: "100%",
    balance: "4,000€",
    actualHours: "2,000",
    status: "Under Budget",
    statusColor: "#2ECC71",
  },
  {
    name: "VR Website",
    company: "Barça",
    budget: "70,000€",
    profitability: "100%",
    balance: "4,000€",
    actualHours: "1,100",
    status: "Under Budget",
    statusColor: "#2ECC71",
  },
];

const BudgetStatus = () => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "8px",
        marginTop: "20px",
        background: "#f4f4f4",
        margin: "0px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "2rem", marginBottom: "15px" }}>
          Budget Status
        </h3>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "15px",
            marginLeft: 20,
          }}
        >
          <button
            style={{
              background: "#26A65B",
              color: "white",
              padding: "8px 10px",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            + Add New Project
          </button>
          <button
            style={{
              background: "white",
              color: "#26A65B",
              padding: "8px 10px",
              border: "1px solid #26A65B",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: 15,
            }}
          >
            Download Report
          </button>
          <input
            type="date"
            style={{
              background: "white",
              color: "#26A65B",
              padding: "8px 10px",
              border: "1px solid #26A65B",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: 15,
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          gap: "15px",
          justifyContent: "space-between",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              flex: "1",
              background: "white",
              padding: "15px",
              borderRadius: "8px",
              textAlign: "left",
              // borderBottom: `5px solid ${project.statusColor}`,
            }}
          >
            <h3 style={{ margin: "0", fontSize: "1.5rem" }}>{project.name}</h3>
            <p style={{ fontSize: "1rem", color: "gray" }}>{project.company}</p>

            <div
              style={{
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <p style={{ margin: "5px 0px", color: "#949191" }}>
                  Total Budget:
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    color: "black",
                    marginLeft: 20,
                  }}
                >
                  {project.budget}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <p style={{ margin: "5px 0px", color: "#949191" }}>
                  Profitability({project.profitability}):{" "}
                </p>
                <p
                  style={{
                    margin: "5px 0",
                    color: project.statusColor,
                    fontWeight: "bold",
                    marginLeft: 20,
                  }}
                >
                  {project.balance}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: project.statusColor,
                height: "12px",
                width: "100%",
                margin: "10px 0px",
                borderRadius: 10,
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "5px 0", fontSize: "12px" }}>
                Actual Hours: {project.actualHours}
              </p>
              <p
                style={{
                  color: project.statusColor,
                  fontWeight: "bold",
                  fontSize: "12px",
                }}
              >
                {project.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BudgetStatus;
