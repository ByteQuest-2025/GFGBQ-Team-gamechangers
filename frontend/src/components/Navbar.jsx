import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "70px",
        background: "var(--card)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* LEFT */}
      <h2 style={{ color: "var(--text)" }}>🏥 Hospital Intelligence</h2>

      {/* RIGHT */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Theme Toggle */}
        <button onClick={toggleTheme} style={iconButton} title="Toggle theme">
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        {/* Role Badge */}
        <span
          style={{
            padding: "6px 14px",
            borderRadius: "20px",
            background: "var(--border)",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {user?.role}
        </span>

        {/* User Name */}
        <span style={{ fontWeight: "500" }}>{user?.name}</span>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#ef4444",
            color: "white",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

const iconButton = {
  padding: "6px 10px",
  borderRadius: "8px",
  border: "1px solid var(--border)",
  background: "var(--card)",
  color: "var(--text)",
  cursor: "pointer",
  fontSize: "16px",
};

export default Navbar;
