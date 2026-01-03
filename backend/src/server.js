require("dotenv").config();
const app = require("./app");
const { testDB } = require("./config/db");

const PORT = process.env.PORT || 5000;

testDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
