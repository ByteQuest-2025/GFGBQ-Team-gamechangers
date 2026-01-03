const { db } = require("../config/db");

const addAdmission = async (data) => {
  const { hospital_id, date, emergency_cases, icu_admissions } = data;

  const [result] = await db.query(
    `INSERT INTO emergency_admissions
     (hospital_id, date, emergency_cases, icu_admissions)
     VALUES (?, ?, ?, ?)`,
    [hospital_id, date, emergency_cases, icu_admissions]
  );

  return result.insertId;
};

const getAdmissionsByHospital = async (hospitalId) => {
  const [rows] = await db.query(
    `SELECT * FROM emergency_admissions
     WHERE hospital_id = ?
     ORDER BY date`,
    [hospitalId]
  );
  return rows;
};

module.exports = {
  addAdmission,
  getAdmissionsByHospital,
};
