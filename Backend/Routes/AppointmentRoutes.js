const express = require("express");
const router = express.Router();
const Appointment = require("../Models/Appointment");

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all appointments by userID
router.get("/user/:userID", async (req, res) => {
  const { userID } = req.params;

  try {
    const appointments = await Appointment.find({ userID });
    if (appointments.length === 0) {
      return res
        .status(404)
        .json({ message: "No appointments found for this user." });
    }
    res.status(200).json(appointments);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Create an appointment
router.post("/create", async (req, res) => {
  const { userID, username, plants, date, reason } = req.body;

  try {
    const appointment = new Appointment({
      userID,
      username,
      plants,
      date,
      reason,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete appointment by ID
router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const appointment = await Appointment.findByIdAndDelete(id);

    if (!appointment) {
      return res.status(404).json({ error: "Appointment not found" });
    }

    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Could not delete appointment" });
  }
});

module.exports = router;
