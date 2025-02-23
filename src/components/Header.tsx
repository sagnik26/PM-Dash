const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#20232a",
        padding: "20px 20px",
        color: "white",
      }}
    >
      <h2>HOURS</h2>
      <nav>
        {["Dashboard", "Projects", "Team", "Clients", "Reports"].map(
          (item, index) => (
            <a
              key={index}
              href="#"
              style={{
                margin: "0 15px",
                color: "white",
                textDecoration: "none",
              }}
            >
              {item}
            </a>
          )
        )}
      </nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
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
          {"M"}
        </div>
        <h3
          style={{
            marginLeft: 10,
          }}
        >
          Mario
        </h3>
      </div>
    </div>
  );
};

export default Header;
