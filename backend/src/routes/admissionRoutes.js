const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createAdmission,
  getAdmissions,
} = require("../controllers/admissionController");

const router = express.Router();

router.post("/", protect, createAdmission);
router.get("/:hospitalId", protect, getAdmissions);

module.exports = router;
