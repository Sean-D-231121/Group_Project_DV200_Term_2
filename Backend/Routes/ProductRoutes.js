const express = require("express");
const router = express.Router();
const Product = require("../Models/Product");

router.post("/registerProduct", async (req, res) => {
  const { id , name, image, rating, description, price } = req.body;

  try {
    const product = new Product({ id, name, description, image, rating, price });
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

// const newProduct = new Product({
//   name: "Colour Booster",
//   description: "Plant food formulated for macro and micro nutrients.",
//   image: "https://wonder.co.za/product/wonder-colour-boost/",
//   rating: 3,
//   price: 70,
// });