import { useEffect, useState } from "react";
import api from "../../api/axios";
import Navbar from "../../components/Navbar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AdminDashboard = () => {
  const [hospitals, setHospitals] = useState([]);
  const [summary, setSummary] = useState({
    totalHospitals: 0,
    highSurge: 0,
    criticalICU: 0,
    highBurnout: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        // 1. Get all hospitals
        const hospitalRes = await api.get("/hospitals");
        const hospitalList = hospitalRes.data;

        let surge = 0;
        let icu = 0;
        let burnout = 0;
        const chartData = [];

        // 2. For each hospital → get predictions
        for (let h of hospitalList) {
          const predRes = await api.get(`/predictions/${h.id}`);
          const p = predRes.data;

          if (p.emergency_surge === "HIGH") surge++;
          if (p.icu_shortage === "CRITICAL") icu++;
          if (p.staff_burnout === "HIGH") burnout++;

          chartData.push({
            name: h.name,
            emergency:
              p.emergency_surge === "HIGH"
                ? 3
                : p.emergency_surge === "MEDIUM"
                ? 2
                : 1,
          });
        }

        setHospitals(chartData);
        setSummary({
          totalHospitals: hospitalList.length,
          highSurge: surge,
          criticalICU: icu,
          highBurnout: burnout,
        });
      } catch (error) {
        console.error("Admin dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminData();
  }, []);

  if (loading)
    return <h3 style={{ padding: "30px" }}>Loading admin dashboard...</h3>;

  return (
    <>
      <Navbar />
      <div className="page">
        <h1>Admin Dashboard</h1>

        {/* ===== SUMMARY CARDS ===== */}
        <div className="grid-3 section">
          <AdminCard title="Total Hospitals" value={summary.totalHospitals} />
          <AdminCard title="High Emergency Surge" value={summary.highSurge} />
          <AdminCard title="Critical ICU Risk" value={summary.criticalICU} />
          <AdminCard title="High Staff Burnout" value={summary.highBurnout} />
        </div>

        {/* ===== HOSPITAL COMPARISON ===== */}
        <div className="card section">
          <h2>Hospital Emergency Load Comparison</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={hospitals}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="emergency" fill="#ff4d4d" />
            </BarChart>
          </ResponsiveContainer>
          <p style={{ marginTop: "10px", fontSize: "14px", color: "#6b7280" }}>
            (1 = Low, 2 = Medium, 3 = High emergency pressure)
          </p>
        </div>
      </div>
    </>
  );
};

/* ===== ADMIN SUMMARY CARD ===== */

const AdminCard = ({ title, value }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p style={{ fontSize: "26px", fontWeight: "600" }}>{value}</p>
    </div>
  );
};

export default AdminDashboard;
