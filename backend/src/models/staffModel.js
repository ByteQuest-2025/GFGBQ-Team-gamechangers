const { db } = require("../config/db");

const addWorkload = async (data) => {
  const {
    hospital_id,
    date,
    doctors_on_duty,
    nurses_on_duty,
    patients_handled,
    overtime_hours,
  } = data;

  const [result] = await db.query(
    `INSERT INTO staff_workload
     (hospital_id, date, doctors_on_duty, nurses_on_duty, patients_handled, overtime_hours)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      hospital_id,
      date,
      doctors_on_duty,
      nurses_on_duty,
      patients_handled,
      overtime_hours,
    ]
  );

  return result.insertId;
};

const getWorkloadByHospital = async (hospitalId) => {
  const [rows] = await db.query(
    `SELECT * FROM staff_workload
     WHERE hospital_id = ?
     ORDER BY date`,
    [hospitalId]
  );
  return rows;
};

module.exports = {
  addWorkload,
  getWorkloadByHospital,
};
