import React from "react";

const teamMembers = [
  { name: "Andrea", role: "UX Junior" },
  { name: "Alvaro", role: "Back-end Developer" },
  { name: "Juan", role: "UX Senior" },
  { name: "Jose", role: "Marketing" },
  { name: "Maria", role: "UX Junior" },
];

const TeamMood = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        width: "250px",
      }}
    >
      <h3
        style={{
          fontSize: "18px",
          color: "#1B1B1B",
          textAlign: "left",
          margin: "10px 0px 10px 0px",
        }}
      >
        Team Mood
      </h3>
      {teamMembers.map((member, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px 0",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "#ccc",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              {member.name.charAt(0)}
            </div>
            <div>
              <strong>{member.name}</strong>
              <p style={{ margin: "0", fontSize: "12px", color: "gray" }}>
                {member.role}
              </p>
            </div>
          </div>
          <span
            style={{
              fontSize: 20,
            }}
          >
            😊
          </span>
        </div>
      ))}
    </div>
  );
};

export default TeamMood;
