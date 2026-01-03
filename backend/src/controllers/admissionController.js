const {
  addAdmission,
  getAdmissionsByHospital,
} = require("../models/admissionModel");

const createAdmission = async (req, res) => {
  try {
    const { hospital_id, date, emergency_cases, icu_admissions } = req.body;

    if (
      !hospital_id ||
      !date ||
      emergency_cases == null ||
      icu_admissions == null
    ) {
      return res.status(400).json({ message: "All fields required" });
    }

    const id = await addAdmission({
      hospital_id,
      date,
      emergency_cases,
      icu_admissions,
    });

    res.status(201).json({
      message: "Emergency admission data added",
      id,
    });
  } catch (error) {
    console.error("ADMISSION ERROR:", error);
    res.status(500).json({ message: "Failed to add admission data" });
  }
};

const getAdmissions = async (req, res) => {
  try {
    const { hospitalId } = req.params;

    const data = await getAdmissionsByHospital(hospitalId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch admissions" });
  }
};

module.exports = {
  createAdmission,
  getAdmissions,
};
