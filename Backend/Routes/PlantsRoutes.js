const express = require("express");
const router = express.Router();
const Plants = require("../Models/Plants");
const multer = require("multer");
const path = require("path");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/PlantImages");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

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

// Add a plant object with image upload
router.post("/add", upload.single("plantImage"), async (req, res) => {
  const { userID, username, plantName, plantDescription } = req.body;
  const imagePath = req.file ? req.file.filename : null;

  try {
    const plant = new Plants({
      userID,
      username,
      plantName,
      plantImage: imagePath,
      plantDescription,
    });
    await plant.save();
    res.status(201).json(plant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a plant object by ID
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;
  const { plantName, plantDescription } = req.body;

  try {
    const updatedPlant = await Plants.findByIdAndUpdate(
      id,
      { plantName, plantDescription },
      { new: true }
    );
    if (!updatedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.status(200).json(updatedPlant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a plant object by ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlant = await Plants.findByIdAndDelete(id);
    if (!deletedPlant) {
      return res.status(404).json({ message: "Plant not found" });
    }
    res.status(200).json({ message: "Plant deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
