const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createWorkload,
  getWorkload,
} = require("../controllers/staffController");

const router = express.Router();

router.post("/", protect, createWorkload);
router.get("/:hospitalId", protect, getWorkload);

module.exports = router;
