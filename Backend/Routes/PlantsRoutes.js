const express = require("express");
const router = express.Router();
const Plants = require("../Models/Plants");

// Get all plant objects
router.get("/", async (req, res) => {
  try {
    const plants = await Plants.find();
    res.status(200).json(plants);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all plants by userID
router.get("/user/:userID", async (req, res) => {
  const { userID } = req.params;

  try {
    const plants = await Plants.find({ userID });
    if (plants.length === 0) {
      return res
        .status(404)
        .json({ message: "No plants found for this user." });
    }
    res.status(200).json(plants);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Add a plant object
router.post("/add", async (req, res) => {
  const { userID, username, plantName, plantDescription } = req.body; // Include userID here

  try {
    const plant = new Plants({
      userID, // Make sure this matches the schema
      username,
      plantName,
      plantDescription,
    });
    await plant.save();
    res.status(201).json(plant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
