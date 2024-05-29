const mongoose = require("mongoose");

const plantsSchema = new mongoose.Schema({
  plantId: { type: String, required: true },
  username: { type: String, required: true },
  plantName: { type: String, required: true },
  plantDescription: { type: String, required: true },
  PlantImage: { type: String, required: true },
});
module.exports = mongoose.model("Plant", plantsSchema);
