import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import PublicNavbar from "../components/PublicNavbar";

const Login = () => {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      login(res.data.token, res.data.user);
      // redirect handled automatically by App.js
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PublicNavbar />

      <div className="page" style={{ maxWidth: "420px", margin: "0 auto" }}>
        <h1>Login</h1>

        <form className="card section" onSubmit={handleSubmit}>
          {error && (
            <p style={{ color: "#dc2626", marginBottom: "10px" }}>{error}</p>
          )}

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Don’t have an account?{" "}
            <Link to="/register" style={{ color: "#2563eb" }}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "6px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#2563eb",
  color: "white",
  borderRadius: "10px",
  border: "none",
  fontWeight: "500",
  cursor: "pointer",
};

export default Login;
