const express = require("express");
const router = express.Router();
const Plants = require("../Models/Plants");

router.post("/registerPlant", async (req, res) => {
  const { plantId, username, plantName, plantDescription,plantImage  } = req.body;

  try {
    const plant = new Plant({
      plantId,
      username,
      plantName,
      plantDescription,
      plantImage,
    });
    await plant.save();
    res.status(201).json(plant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const plants = await Plants.find();
    res.status(200).json(plants);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
