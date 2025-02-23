import React from "react";

const Metrics = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        gap: 20,
      }}
    >
      {[
        { label: "Total Projects", value: 5 },
        { label: "Completed", value: 1 },
        { label: "Ongoing", value: 3 },
        { label: "Delayed", value: 1 },
        { label: "Employees", value: 5 },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "50px 20px",
            flex: "1",
            textAlign: "center",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
          }}
        >
          <h3>{item.label}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
