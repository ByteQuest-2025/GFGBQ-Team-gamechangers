import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* ===== AUTH ===== */
import Login from "./auth/Login";
import Register from "./auth/Register";

/* ===== PUBLIC PAGES ===== */
import Home from "./pages/public/Home";
import Features from "./pages/public/Features";
import About from "./pages/public/About";

/* ===== DASHBOARDS ===== */
import ManagerDashboard from "./pages/manager/ManagerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";

/* ===== PROTECTION ===== */
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />

        {/* ================= AUTH ROUTES ================= */}
        <Route
          path="/login"
          element={
            user ? (
              user.role === "ADMIN" ? (
                <Navigate to="/admin/dashboard" />
              ) : (
                <Navigate to="/manager/dashboard" />
              )
            ) : (
              <Login />
            )
          }
        />

        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />

        {/* ================= MANAGER DASHBOARD ================= */}
        <Route
          path="/manager/dashboard"
          element={
            <ProtectedRoute role="MANAGER">
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        {/* ================= ADMIN DASHBOARD ================= */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ================= FALLBACK ================= */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
