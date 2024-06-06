const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    id: {type: String, required : true},
  username : {type: String, required : true},
  cartProducts:{type: Array, required : true },
  totalPrice: {type: Number, required: true}
});
module.exports = mongoose.model("Cart", cartSchema);
