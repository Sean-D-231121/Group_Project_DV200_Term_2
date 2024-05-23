const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Ensure the path to the User model is correct

// Create new user
router.post('/register', async (req, res) => {
    const {username, name, email, password } = req.body;

    try {
        const user = new User({ username, name, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});
// Sign in
router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send({ message: "Sign in successful" });
    } else {
      res.status(401).send({ message: "Invalid credentials" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
