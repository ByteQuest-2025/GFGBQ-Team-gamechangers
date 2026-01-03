const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const {
  addHospital,
  listHospitals,
} = require("../controllers/hospitalController");

const router = express.Router();

router.post("/", protect, authorize("ADMIN", "MANAGER"), addHospital);
router.get("/", protect, listHospitals);

module.exports = router;
