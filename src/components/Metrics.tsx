import { FiGrid } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineSync } from "react-icons/ai";
import { AiOutlineWarning } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

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
        { label: "Total Projects", value: 5, component: <FiGrid size={30} /> },
        {
          label: "Completed",
          value: 1,
          component: <AiOutlineCheckCircle size={30} />,
        },
        { label: "Ongoing", value: 3, component: <AiOutlineSync size={30} /> },
        {
          label: "Delayed",
          value: 1,
          component: <AiOutlineWarning size={30} />,
        },
        { label: "Employees", value: 5, component: <FiUsers size={30} /> },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "20px 20px",
            flex: "1",
            textAlign: "center",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <h2 style={{ fontSize: "3rem" }}>{item.value}</h2>
          <p
            style={{
              color: "#949191",
              marginTop: 10,
            }}
          >
            {item.label}
          </p>

          <div
            style={{
              position: "absolute",
              top: 20,
              left: 20,
            }}
          >
            {item.component}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;
