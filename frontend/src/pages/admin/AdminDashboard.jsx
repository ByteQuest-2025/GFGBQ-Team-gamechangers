import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../../context/AuthContext";

const AdminDashboard = () => {
  const { logout } = useAuth();

  const [stats, setStats] = useState({
    hospitals: 128,
    icu: 74,
    managers: 210,
    alerts: 12,
  });

  const [chartData, setChartData] = useState([
    { month: "Jan", load: 20 },
    { month: "Feb", load: 35 },
    { month: "Mar", load: 50 },
    { month: "Apr", load: 78 },
    { month: "May", load: 70 },
    { month: "Jun", load: 75 },
  ]);

  useEffect(() => {
    const i = setInterval(() => {
      setStats((s) => ({
        hospitals: s.hospitals + Math.floor(Math.random() * 2),
        icu: Math.min(100, Math.max(50, s.icu + (Math.random() * 4 - 2))),
        managers: s.managers + Math.floor(Math.random() * 2),
        alerts: Math.max(0, s.alerts + Math.floor(Math.random() * 3 - 1)),
      }));

      setChartData((d) =>
        d.map((x) => ({
          ...x,
          load: Math.min(95, Math.max(20, x.load + (Math.random() * 6 - 3))),
        }))
      );
    }, 3000);

    return () => clearInterval(i);
  }, []);

  return (
    <div style={layout}>
      <aside style={sidebar}>
        <h2>Medix</h2>
        <nav>
          <p className="active">Overview</p>
          <p>Hospitals</p>
          <p>Analytics</p>
          <p onClick={logout} style={{ cursor: "pointer", color: "#f87171" }}>
            Logout
          </p>
        </nav>
      </aside>

      <main style={main}>
        <h1>Admin Dashboard</h1>

        <div style={grid}>
          <Card title="Total Hospitals" value={stats.hospitals} />
          <Card
            title="System ICU Capacity"
            value={`${stats.icu.toFixed(1)}%`}
          />
          <Card title="Active Managers" value={stats.managers} />
          <Card title="Critical Alerts" value={stats.alerts} />
        </div>

        <div style={card}>
          <h3>Global Hospital Load Trend (ML-Ready)</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData}>
              <XAxis dataKey="month" />
              <YAxis unit="%" />
              <Tooltip />
              <Area dataKey="load" stroke="#2563eb" fill="#93c5fd" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div style={kpi}>
    <p>{title}</p>
    <h2>{value}</h2>
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
  marginBottom: 40,
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

export default AdminDashboard;
