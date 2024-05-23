const express = require("express");
const router = express.Router();
const Cart = require("../Models/Cart");

router.post("/registerToCart", async (req, res) => {
  const { id, user, cartProducts} = req.body;

  try {
    const cartOrder = new Cart({
      id,
      user,
      cartProducts
    });
    await cartOrder.save();
    res.status(201).json(cartOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const cartOrders = await Cart.find();
    res.status(200).json(cartOrders);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;
