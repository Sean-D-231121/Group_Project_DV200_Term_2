const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema({
  id: { type: String, required: false },
  userID: { type: String, required: true },
  username: { type: String, required: true },
  plantName: { type: String, required: true },
  plantImage: { type: String, required: false },
  plantDescription: { type: String, required: true },
  entryDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Plant", plantsSchema);
