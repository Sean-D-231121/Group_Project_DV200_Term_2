const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  appointmentId: { type: String, required: true },
  username: { type: String, required: true },
  plants: { type: Array, required: true },
  date: {type: Date, required : true},
  reason: {type: String, required : true}

});
module.exports = mongoose.model("Appointment", appointmentSchema);
