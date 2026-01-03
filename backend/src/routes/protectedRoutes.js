const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");

const router = express.Router();

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json({
    message: "Protected profile data",
    user: req.user,
  });
});

// Admin only
router.get("/admin-dashboard", protect, authorize("ADMIN"), (req, res) => {
  res.json({
    message: "Welcome Admin 👑",
  });
});

module.exports = router;
