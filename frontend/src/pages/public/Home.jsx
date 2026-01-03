import PublicNavbar from "../../components/PublicNavbar";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <PublicNavbar />

      <div className="page">
        {/* HERO */}
        <section
          id="home"
          style={{ display: "flex", gap: "60px", alignItems: "center" }}
        >
          <div style={{ flex: 1 }}>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              AI-Driven <br /> Hospital Intelligence
            </motion.h1>

            <p style={{ maxWidth: 520 }}>
              Medix helps hospitals predict emergency surges, ICU demand, and
              staff workload — enabling proactive, life-saving decisions.
            </p>

            <div style={{ marginTop: 32, display: "flex", gap: 20 }}>
              <a href="/login" className="btn-primary">
                Get Started
              </a>
              <a href="#features" className="btn-outline">
                View Features
              </a>
            </div>
          </div>

          {/* 3D IMAGE */}
          <motion.img
            src="https://www.econlib.org/wp-content/uploads/2018/04/health-care-.jpg"
            alt="Doctor"
            style={{ width: 420, borderRadius: 35, }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </section>

        {/* FEATURES */}
        <section id="features">
          <h2>Key Features</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 30,
            }}
          >
            {features.map((f) => (
              <div className="card" key={f.title}>
                <span className="material-icons">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <div className="tech-scroll">
          <div className="tech-track">
            {tech.map((t) => (
              <span key={t} className="material-icons" style={{ fontSize: 48 }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about">
          <h2>About Us</h2>
          <div className="team-grid">
            {team.map((m) => (
              <div
                className="card"
                key={m.name}
                style={{ textAlign: "center" }}
              >
                <img src={m.img} className="avatar" alt={m.name} />
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: 80,
            textAlign: "center",
            color: "var(--subtext)",
          }}
        >
          © 2026 Medix · All Rights Reserved
        </footer>
      </div>
    </>
  );
};

const features = [
  {
    icon: "insights",
    title: "Predictive Analytics",
    desc: "Forecast hospital load",
  },
  {
    icon: "local_hospital",
    title: "ICU Demand Forecasting",
    desc: "Predict ICU shortages",
  },
  {
    icon: "groups",
    title: "Staff Workload Prediction",
    desc: "Prevent burnout",
  },
  { icon: "bed", title: "Resource Planning", desc: "Optimize beds & staff" },
  {
    icon: "warning",
    title: "Emergency Preparedness",
    desc: "Be ready before crises",
  },
  { icon: "lock", title: "Role-Based Access", desc: "Secure dashboards" },
];

const tech = ["javascript", "terminal", "storage", "css", "cloud", "code"];

const team = [
  {
    name: "Utkarsh Kashid",
    role: "Full Stack Developer",
    img: "https://img.freepik.com/premium-vector/young-man-anime-style-character-vector-illustration-design-manga-anime-boy_147933-4686.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    name: "Atharva Khabale",
    role: "Backend & ML",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Vinit Khedkar",
    role: "UI / UX",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWAuGDDgSDCP_uI6TframOJKZSJWv7iyA5dbExONsF4A&s",
  },
];

export default Home;
