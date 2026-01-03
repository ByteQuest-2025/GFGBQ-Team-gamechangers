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

const About = () => {
  return (
    <>
      <PublicNavbar />

      <div className="page">
        {/* ================= INTRO ================= */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={sectionVariant}
        >
          <h1 style={{ fontSize: "40px" }}>About This Project</h1>

          <p
            style={{
              marginTop: "20px",
              fontSize: "18px",
              color: "#4b5563",
              maxWidth: "850px",
            }}
          >
            The Predictive Hospital Resource & Emergency Load Intelligence
            System is designed to help healthcare institutions anticipate crises
            rather than react to them. By analyzing historical and operational
            data, the system provides early warnings for emergency surges, ICU
            shortages, and staff burnout.
          </p>
        </motion.section>

        {/* ================= MISSION ================= */}
        <motion.section
          className="card"
          style={{ marginTop: "60px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2>Our Mission</h2>
          <p style={{ marginTop: "10px", color: "#374151", lineHeight: "1.7" }}>
            Healthcare systems across the world often face sudden pressure due
            to outbreaks, disasters, or seasonal trends. Our mission is to
            empower hospitals with predictive intelligence so that critical
            resources like beds, ICUs, and medical staff can be planned
            proactively — saving lives and reducing operational stress.
          </p>
        </motion.section>

        {/* ================= WHY IT MATTERS ================= */}
        <motion.section
          className="card"
          style={{ marginTop: "40px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2>Why This Matters</h2>
          <ul
            style={{
              marginTop: "15px",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            <li>
              🚨 Emergency departments are often overwhelmed without warning
            </li>
            <li>🛏 ICU shortages can lead to delayed or denied critical care</li>
            <li>🧑‍⚕️ Staff burnout affects patient safety and outcomes</li>
            <li>📉 Reactive decision-making increases chaos during crises</li>
          </ul>
        </motion.section>

        {/* ================= TECHNOLOGY ================= */}
        <motion.section
          className="card"
          style={{ marginTop: "40px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2>Technology Stack</h2>
          <p style={{ marginTop: "10px", color: "#374151" }}>
            This project is built using a modern, scalable technology stack:
          </p>

          <ul
            style={{
              marginTop: "10px",
              lineHeight: "1.8",
              color: "#374151",
            }}
          >
            <li>⚙️ Backend: Node.js, Express</li>
            <li>🗄 Database: MySQL</li>
            <li>🎨 Frontend: React</li>
            <li>🔐 Security: JWT & Role-Based Access Control</li>
            <li>🧠 Intelligence Layer: Rule-based prediction (ML-ready)</li>
            <li>📊 Visualization: Recharts + Framer Motion</li>
          </ul>
        </motion.section>

        {/* ================= PROJECT NOTE ================= */}
        <motion.section
          className="card"
          style={{ marginTop: "40px" }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariant}
        >
          <h2>Project Note</h2>
          <p style={{ marginTop: "10px", color: "#374151", lineHeight: "1.7" }}>
            This system has been developed as an academic and innovation project
            with a strong focus on solving real-world healthcare challenges.
            While currently using rule-based prediction logic, the architecture
            is fully prepared for integration with machine learning models and
            real-time data sources in future iterations.
          </p>
        </motion.section>
      </div>
    </>
  );
};

export default About;
