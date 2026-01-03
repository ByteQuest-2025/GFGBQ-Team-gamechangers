const { getAdmissionsByHospital } = require("../models/admissionModel");
const { getWorkloadByHospital } = require("../models/staffModel");
const { db } = require("../config/db");
const {
  predictEmergencySurge,
  predictICUShortage,
  predictStaffBurnout,
} = require("../services/predictionService");

const getPredictions = async (req, res) => {
  try {
    const { hospitalId } = req.params;

    const [hospitalRows] = await db.query(
      "SELECT * FROM hospitals WHERE id = ?",
      [hospitalId]
    );

    if (!hospitalRows.length) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    const hospital = hospitalRows[0];

    const admissions = await getAdmissionsByHospital(hospitalId);
    const staff = await getWorkloadByHospital(hospitalId);

    const response = {
      emergency_surge: predictEmergencySurge(admissions),
      icu_shortage: predictICUShortage(admissions, hospital),
      staff_burnout: predictStaffBurnout(staff),
    };

    res.json(response);
  } catch (error) {
    console.error("PREDICTION ERROR:", error);
    res.status(500).json({ message: "Prediction failed" });
  }
};

module.exports = { getPredictions };
