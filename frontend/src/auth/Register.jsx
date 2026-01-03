import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import PublicNavbar from "../components/PublicNavbar";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
        // role NOT sent → defaults to MANAGER (secure)
      });

      navigate("/login");
    } catch (err) {
      setError("Registration failed. Email may already exist.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PublicNavbar />

      <div className="page" style={{ maxWidth: "420px", margin: "0 auto" }}>
        <h1>Register</h1>

        <form className="card section" onSubmit={handleSubmit}>
          {error && (
            <p style={{ color: "#dc2626", marginBottom: "10px" }}>{error}</p>
          )}

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={inputStyle}
          />

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
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </button>

          <p style={{ marginTop: "15px", fontSize: "14px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#2563eb" }}>
              Login
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

export default Register;
