const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id: {type: String, required: true},
    name : {type: String, required: true},
    description : {type: String, required: true},
    image : {type: String, required : true},
    rating : {type: Number, required : true},
    price : {type: Number, required : true },
    

})
module.exports = mongoose.model("Product", productSchema);