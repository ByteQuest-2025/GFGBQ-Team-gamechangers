const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { getPredictions } = require("../controllers/predictionController");

const router = express.Router();

router.get("/:hospitalId", protect, getPredictions);

module.exports = router;
