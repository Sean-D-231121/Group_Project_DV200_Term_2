const express = require("express");
const router = express.Router();
const Appointment = require("../Models/Appointment");

router.post("/register", async (req, res) => {
  const { appointmentId, username, plants, date, reason } = req.body;

  try {
    const appointment = new Cart({
      appointmentId,
      username,
      plants,
      date,
      reason,
    });
    await appointment.save();
    res.status(201).json(cartOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const Appointments = await Appointment.find();
    res.status(200).json(cartOrders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/create", async (req, res) => {
  const { username, plants, date, reason } = req.body;

  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    // Create new user
    const appointment = new Appointment({ username, plants, date, reason });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(500).json({ error: "Could not create appointment" });
  }
});

module.exports = router;
