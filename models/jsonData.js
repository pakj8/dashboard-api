const express = require("express");
const router = express.Router();
const JsonData = require("./Schema");

router.get("/", async (req, res) => {
  try {
    const jsonData = await JsonData.find();
    res.json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
