import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside style={sidebar}>
      <div style={brand}>
        <h2>Medix</h2>
        <p style={{ fontSize: 12, opacity: 0.7 }}>Hospital Intelligence</p>
      </div>

      <nav style={nav}>
        <NavLink to="/admin" style={link}>
          Admin Dashboard
        </NavLink>
        <NavLink to="/manager" style={link}>
          Manager Dashboard
        </NavLink>
        <NavLink to="/" style={link}>
          Back to Home
        </NavLink>
      </nav>
    </aside>
  );
};

const sidebar = {
  width: 240,
  padding: "32px 20px",
  borderRight: "1px solid var(--border)",
  background: "var(--card)",
};

const brand = {
  marginBottom: 40,
};

const nav = {
  display: "flex",
  flexDirection: "column",
  gap: 16,
};

const link = {
  padding: "12px 16px",
  borderRadius: 10,
  fontWeight: 500,
};

export default Sidebar;
