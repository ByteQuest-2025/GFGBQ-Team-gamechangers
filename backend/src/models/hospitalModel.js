const { db } = require("../config/db");

const createHospital = async (hospital) => {
  const { name, location, total_beds, icu_beds, created_by } = hospital;

  const [result] = await db.query(
    `INSERT INTO hospitals (name, location, total_beds, icu_beds, created_by)
     VALUES (?, ?, ?, ?, ?)`,
    [name, location, total_beds, icu_beds, created_by]
  );

  return result.insertId;
};

const getHospitals = async () => {
  const [rows] = await db.query("SELECT * FROM hospitals");
  return rows;
};

const getHospitalsByManager = async (managerId) => {
  const [rows] = await db.query(
    "SELECT * FROM hospitals WHERE created_by = ?",
    [managerId]
  );
  return rows;
};

module.exports = {
  createHospital,
  getHospitals,
  getHospitalsByManager,
};
