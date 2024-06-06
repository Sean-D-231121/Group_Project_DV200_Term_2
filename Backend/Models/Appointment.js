const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  id: { type: String, required: false },
  userID: { type: String, required: true },
  username: { type: String, required: true },
  plants: { type: Array, required: true },
  date: { type: Date, required: true },
  reason: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Appointment", appointmentSchema);
