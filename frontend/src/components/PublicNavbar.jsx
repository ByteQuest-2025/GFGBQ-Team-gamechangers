import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/medix-logo.png";

const PublicNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={nav}>
      <div style={brand}>
        <img src={logo} alt="Medix" style={{ height: 28 }} />
        <strong>Medix</strong>
      </div>

      <div style={links}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>

        <button onClick={toggleTheme} style={iconBtn}>
          <span className="material-icons">
            {theme === "light" ? "dark_mode" : "light_mode"}
          </span>
        </button>

        <Link to="/login" style={loginBtn}>
          Login
        </Link>
      </div>
    </nav>
  );
};

const nav = {
  height: 72,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 40px",
  borderBottom: "1px solid var(--border)",
  background: "var(--bg)",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const brand = {
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const links = {
  display: "flex",
  gap: 28,
  alignItems: "center",
};

const loginBtn = {
  background: "var(--primary)",
  color: "white",
  padding: "10px 22px",
  borderRadius: 10,
};

const iconBtn = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

export default PublicNavbar;
