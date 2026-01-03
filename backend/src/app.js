const express = require("express");
const cors = require("cors");
const { db } = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");
const hospitalRoutes = require("./routes/hospitalRoutes");
const admissionRoutes = require("./routes/admissionRoutes");
const staffRoutes = require("./routes/staffRoutes");
const predictionRoutes = require("./routes/predictionRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check Route
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Predictive Hospital Backend is running 🚑",
    timestamp: new Date(),
  });
});


app.get("/api/db-health", async (req, res) => {
  try {
    await db.query("SELECT NOW()");
    res.status(200).json({
      status: "OK",
      message: "Database connected successfully 🗄️",
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      message: "Database connection failed",
    });
  }
});


app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/admissions", admissionRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/predictions", predictionRoutes);



module.exports = app;
