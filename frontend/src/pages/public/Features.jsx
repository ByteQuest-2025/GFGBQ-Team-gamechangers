import PublicNavbar from "../../components/PublicNavbar";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Features = () => {
  return (
    <>
      <PublicNavbar />

      <div className="page">
        {/* ================= HERO ================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <h1 style={{ fontSize: "40px", maxWidth: "900px" }}>
            Platform Features
          </h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#4b5563",
              maxWidth: "800px",
            }}
          >
            Our system leverages historical hospital data, real-time inputs, and
            predictive intelligence to help healthcare institutions prepare
            before emergencies overwhelm resources.
          </p>
        </motion.section>

        {/* ================= FEATURES GRID ================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <FeatureCard
            title="🚨 Emergency Load Prediction"
            description="Forecasts sudden spikes in emergency admissions using historical trends and seasonal patterns, allowing hospitals to prepare resources in advance."
          />

          <FeatureCard
            title="🛏 ICU Bed Demand Forecasting"
            description="Predicts ICU occupancy risk and identifies potential shortages before they become critical, improving patient outcomes."
          />

          <FeatureCard
            title="🧑‍⚕️ Staff Workload & Burnout Detection"
            description="Monitors staff workload, overtime hours, and patient ratios to identify burnout risks and support better workforce planning."
          />

          <FeatureCard
            title="📊 Role-Based Dashboards"
            description="Managers get hospital-level operational insights, while administrators view system-wide analytics for strategic decisions."
          />

          <FeatureCard
            title="🔐 Secure Role-Based Access"
            description="Strong separation between Admin and Manager roles ensures data privacy, accountability, and secure access control."
          />

          <FeatureCard
            title="🧠 AI-Ready Predictive Engine"
            description="Built with a modular prediction layer that currently uses rule-based logic and can be upgraded to machine learning models seamlessly."
          />
        </div>

        {/* ================= HOW IT WORKS ================= */}
        <motion.section
          className="card"
          style={{ marginTop: "80px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2>How the System Works</h2>

          <ol
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            <li>
              📥 Collects hospital admissions, ICU usage, and staff workload
              data
            </li>
            <li>📈 Analyzes historical and real-time trends</li>
            <li>🧠 Generates predictive insights on future load and risks</li>
            <li>📊 Visualizes insights through interactive dashboards</li>
            <li>🚑 Helps hospitals act early instead of reacting late</li>
          </ol>
        </motion.section>
      </div>
    </>
  );
};

/* ================= FEATURE CARD ================= */

const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
      className="card"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: "10px", color: "#4b5563" }}>{description}</p>
    </motion.div>
  );
};

export default Features;
