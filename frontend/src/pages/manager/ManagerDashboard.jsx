import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../../context/AuthContext";

const ManagerDashboard = () => {
  const { logout } = useAuth();

  const [stats, setStats] = useState({
    admissions: 87,
    icuUsed: 14,
    icuTotal: 60,
    staff: 112,
    risk: "Medium",
    next24h: 95,
  });

  useEffect(() => {
    const i = setInterval(() => {
      setStats((s) => ({
        ...s,
        admissions: s.admissions + Math.floor(Math.random() * 4),
        icuUsed: Math.min(
          s.icuTotal,
          Math.max(5, s.icuUsed + (Math.random() * 3 - 1))
        ),
        staff: s.staff + Math.floor(Math.random() * 2 - 1),
        risk: Math.random() > 0.6 ? "High" : "Medium",
        next24h: s.next24h + Math.floor(Math.random() * 5 - 2),
      }));
    }, 3000);
    return () => clearInterval(i);
  }, []);

  const icuPercent = Math.round((stats.icuUsed / stats.icuTotal) * 100);

  const staffData = [
    { dept: "ER", value: 60 },
    { dept: "ICU", value: 85 },
    { dept: "OPD", value: 40 },
    { dept: "Ward", value: 70 },
  ];

  const flowData = [
    { day: "Mon", value: 30 },
    { day: "Tue", value: 55 },
    { day: "Wed", value: 45 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 50 },
  ];

  return (
    <div style={layout}>
      <aside style={sidebar}>
        <h2>Medix</h2>
        <p className="active">Overview</p>
        <p>My Hospital</p>
        <p>Analytics</p>
        <p onClick={logout} style={{ color: "#f87171", cursor: "pointer" }}>
          Logout
        </p>
      </aside>

      <main style={main}>
        <h1>Manager Dashboard</h1>

        <div style={grid}>
          <Card title="Today's Admissions" value={stats.admissions} />
          <Card
            title="ICU Beds"
            value={`${stats.icuUsed} / ${stats.icuTotal}`}
          />
          <Card title="Staff on Duty" value={stats.staff} />
          <Card title="Risk Level" value={stats.risk} highlight />
        </div>

        <div style={row}>
          <div style={card}>
            <h3>ICU Occupancy</h3>
            <h1>{icuPercent}%</h1>
          </div>

          <div style={{ ...card, background: "#0f4c81", color: "#fff" }}>
            <h3>Prediction Panel</h3>
            <p>Next 24h Admissions</p>
            <h1>~{stats.next24h}</h1>
            <p>Next 72h ICU Demand</p>
            <h2 style={{ color: "#facc15" }}>{stats.risk}</h2>
          </div>
        </div>

        <div style={row}>
          <div style={card}>
            <h4>Staff Allocation</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={staffData}>
                <XAxis dataKey="dept" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div style={card}>
            <h4>Patient Flow</h4>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={flowData}>
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area dataKey="value" stroke="#16a34a" fill="#bbf7d0" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value, highlight }) => (
  <div style={kpi}>
    <p>{title}</p>
    <h2 style={{ color: highlight ? "#ca8a04" : "#0f172a" }}>{value}</h2>
  </div>
);

const layout = { display: "flex", minHeight: "100vh", background: "#f1f5f9" };
const sidebar = {
  width: 220,
  background: "#0f172a",
  color: "#fff",
  padding: 24,
};
const main = { flex: 1, padding: 32 };
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: 20,
  marginBottom: 32,
};
const row = {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gap: 20,
  marginBottom: 32,
};
const kpi = {
  background: "#fff",
  padding: 20,
  borderRadius: 14,
  boxShadow: "0 10px 25px rgba(0,0,0,.08)",
};
const card = {
  background: "#fff",
  padding: 24,
  borderRadius: 14,
  boxShadow: "0 10px 25px rgba(0,0,0,.08)",
};

export default ManagerDashboard;
