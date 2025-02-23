import React from "react";

const TeamsMood = () => {
  return (
    <div
      style={{
        flex: "1",
        background: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 5px rgba(0,0,0,0.1)",
      }}
    >
      <h3>Team Mood</h3>
      {[
        { name: "Andrea", role: "UX Junior" },
        { name: "Alvaro", role: "Back-end Developer" },
        { name: "Juan", role: "UX Senior" },
        { name: "Jose", role: "Marketing" },
        { name: "Maria", role: "UX Junior" },
      ].map((member, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div>
            <strong>{member.name}</strong>
            <p style={{ margin: "0", fontSize: "12px", color: "gray" }}>
              {member.role}
            </p>
          </div>
          <span>😊</span>
        </div>
      ))}
    </div>
  );
};

export default TeamsMood;
