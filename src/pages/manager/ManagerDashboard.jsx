import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ManagerDashboard = () => {
  const [predictions, setPredictions] = useState(null);
  const [admissions, setAdmissions] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);

  // TEMP: static hospital id
  // Later we’ll make it dynamic (hospital selector)
  const hospitalId = 1;

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [predRes, admRes, staffRes] = await Promise.all([
          api.get(`/predictions/${hospitalId}`),
          api.get(`/admissions/${hospitalId}`),
          api.get(`/staff/${hospitalId}`),
        ]);

        setPredictions(predRes.data);

        setAdmissions(
          admRes.data.map((d) => ({
            date: d.date,
            emergency: d.emergency_cases,
          }))
        );

        setStaffData(
          staffRes.data.map((d) => ({
            date: d.date,
            patients: d.patients_handled,
            overtime: d.overtime_hours,
          }))
        );
      } catch (error) {
        console.error("Manager dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) return <h3 style={{ padding: "30px" }}>Loading dashboard...</h3>;

  return (
      <>
    <Navbar />
   
    <div className="page">
      <h1>Manager Dashboard</h1>

      {/* ================= STATUS CARDS ================= */}
      <div className="grid-3 section">
        <StatusCard
          title="Emergency Surge"
          value={predictions.emergency_surge}
        />
        <StatusCard title="ICU Bed Status" value={predictions.icu_shortage} />
        <StatusCard
          title="Staff Burnout Risk"
          value={predictions.staff_burnout}
        />
      </div>

      {/* ================= EMERGENCY ADMISSIONS ================= */}
      <div className="card section">
        <h2>Emergency Admissions Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={admissions}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="emergency"
              stroke="#ff4d4d"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* ================= STAFF WORKLOAD ================= */}
      <div className="card section">
        <h2>Staff Workload Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={staffData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="patients"
              stroke="#4caf50"
              strokeWidth={3}
              name="Patients Handled"
            />
            <Line
              type="monotone"
              dataKey="overtime"
              stroke="#ffa500"
              strokeWidth={2}
              name="Overtime Hours"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  </>
  );
};

/* ================= STATUS CARD ================= */

const StatusCard = ({ title, value }) => {
  const getClass = () => {
    if (value === "HIGH" || value === "CRITICAL") return "status-high";
    if (value === "MEDIUM" || value === "WARNING") return "status-medium";
    return "status-low";
  };

  return (
    <div className={`card ${getClass()}`}>
      <h3>{title}</h3>
      <p style={{ fontSize: "22px", fontWeight: "600" }}>{value}</p>
    </div>
  );
};

export default ManagerDashboard;
