import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div
      style={{
        height: "60px",
        background: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 30px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <h2>🏥 Hospital Intelligence</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <span
          style={{
            padding: "5px 12px",
            borderRadius: "20px",
            background: "#eef2ff",
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          {user?.role}
        </span>

        <span style={{ fontWeight: "500" }}>{user?.name}</span>

        <button
          onClick={handleLogout}
          style={{
            padding: "6px 14px",
            borderRadius: "8px",
            border: "none",
            background: "#ef4444",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
