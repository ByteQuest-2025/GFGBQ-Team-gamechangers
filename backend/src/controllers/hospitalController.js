const {
  createHospital,
  getHospitals,
  getHospitalsByManager,
} = require("../models/hospitalModel");

const addHospital = async (req, res) => {
  try {
    const { name, location, total_beds, icu_beds } = req.body;

    if (!name || !location || !total_beds || !icu_beds) {
      return res.status(400).json({ message: "All fields required" });
    }

    const hospitalId = await createHospital({
      name,
      location,
      total_beds,
      icu_beds,
      created_by: req.user.id,
    });

    res.status(201).json({
      message: "Hospital created successfully",
      hospitalId,
    });
  } catch (error) {
    console.error("ADD HOSPITAL ERROR:", error);
    res.status(500).json({ message: "Failed to create hospital" });
  }
};

const listHospitals = async (req, res) => {
  try {
    if (req.user.role === "ADMIN") {
      const hospitals = await getHospitals();
      return res.json(hospitals);
    }

    const hospitals = await getHospitalsByManager(req.user.id);
    res.json(hospitals);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch hospitals" });
  }
};

module.exports = {
  addHospital,
  listHospitals,
};
