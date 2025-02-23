import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const revenueData = [
  { name: "19 June", cost: 500 },
  { name: "20 June", cost: 2000 },
  { name: "21 June", cost: 2500 },
  { name: "22 June", cost: 3000 },
  { name: "23 June", cost: 4500 },
  { name: "24 June", cost: 6000 },
  { name: "25 June", cost: 6500 },
];

const budgetData = [
  { name: "Over Budget", value: 19, color: "#E74C3C" },
  { name: "On Budget", value: 33, color: "#3498DB" },
  { name: "Under Budget", value: 48, color: "#2ECC71" },
];

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="14px"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {/* Graphs Section */}
      <div style={{ display: "flex", gap: "20px", height: "300px" }}>
        {/* Total Revenue (Line Chart) */}
        <div
          style={{
            background: "white",
            padding: "20px",
            flex: "2",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{ fontSize: "18px", color: "#1f2937", textAlign: "center" }}
          >
            Total Revenue
          </h3>
          <ResponsiveContainer width="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="cost"
                stroke="#3498DB"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Budget (Pie Chart) */}
        <div
          style={{
            background: "white",
            padding: "20px",
            flex: "1",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{ fontSize: "18px", color: "#1f2937", textAlign: "center" }}
          >
            Budget
          </h3>
          <ResponsiveContainer width="100%">
            <PieChart>
              <Pie
                data={budgetData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={40} // Creates the hole (doughnut effect)
                outerRadius={70}
                fill="#8884d8"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {budgetData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
