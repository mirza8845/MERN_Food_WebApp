const express = require("express");
const router = express.Router();

const User = require("../models/userModel");

router.get("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    newUser.save();
    res.send("User Register Successfully");
  } catch (err) {
    return res.status(400).json({ message: err });
  }
});

module.exports = router;
