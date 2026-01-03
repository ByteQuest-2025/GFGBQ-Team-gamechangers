const { addWorkload, getWorkloadByHospital } = require("../models/staffModel");

const createWorkload = async (req, res) => {
  try {
    const {
      hospital_id,
      date,
      doctors_on_duty,
      nurses_on_duty,
      patients_handled,
      overtime_hours,
    } = req.body;

    if (
      !hospital_id ||
      !date ||
      doctors_on_duty == null ||
      nurses_on_duty == null ||
      patients_handled == null
    ) {
      return res.status(400).json({ message: "All required fields needed" });
    }

    const id = await addWorkload({
      hospital_id,
      date,
      doctors_on_duty,
      nurses_on_duty,
      patients_handled,
      overtime_hours: overtime_hours || 0,
    });

    res.status(201).json({
      message: "Staff workload data added",
      id,
    });
  } catch (error) {
    console.error("STAFF ERROR:", error);
    res.status(500).json({ message: "Failed to add staff workload" });
  }
};

const getWorkload = async (req, res) => {
  try {
    const { hospitalId } = req.params;
    const data = await getWorkloadByHospital(hospitalId);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch staff workload" });
  }
};

module.exports = {
  createWorkload,
  getWorkload,
};
