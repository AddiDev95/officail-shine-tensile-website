import { Link } from "react-router-dom";
import logo from "../assets/img/logoPNG.png";


const Navbar = () => {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #03045e, #0077b6)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px",
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          style={{
            color: "#caf0f8",
            fontSize: "1.4rem",
            fontWeight: "700",
            letterSpacing: "0.04em",
            textDecoration: "none",
          }}
        >
        <div className="logo-wrap">
  <img src={logo} alt="Shine Tensile Structure Logo" />
</div>

        </Link>

        {/* NAV LINKS */}
        <nav style={{ display: "flex", gap: "32px" }}>
          {["About", "Services", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              style={{
                color: "#caf0f8",
                textDecoration: "none",
                fontWeight: "500",
                position: "relative",
              }}
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
