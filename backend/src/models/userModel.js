const { db } = require("../config/db");

const createUser = async (user) => {
  const { name, email, password, role } = user;
  const [result] = await db.query(
    "INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)",
    [name, email, password, role]
  );
  return result.insertId;
};

const findUserByEmail = async (email) => {
  const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

module.exports = {
  createUser,
  findUserByEmail,
};
