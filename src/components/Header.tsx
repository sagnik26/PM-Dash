const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#20232a",
        padding: "10px 20px",
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
      <div>Mario</div>
    </div>
  );
};

export default Header;
