const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// POST /api/users
router.post("/", async (req, res) => { //controller bhi add kar sakte the but small project hai isliye direct kiya
  try {//to avoid try and catch we can also use asyncHandler i.e utils folder mein separately bana sakte h
    const { name, email, age, address, password } = req.body;

    // Basic server-side validation
    if (!name || !email || !age || !address || !password) { //for validation we can also use express-validator middleware
      return res.status(400).json({ message: "All fields are required" });
    }

    //for validation we can also use express-validator middleware for best practices
    // Name letters only
    if (!/^[A-Za-z\s]+$/.test(name)) {
      return res.status(400).json({ message: "Invalid name format" });
    }

    // Email basic format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      return res.status(400).json({ message: "Invalid age" });
    }

    // Check if user exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ message: "User with this email already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);//here password is hashed 

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      age: ageNum,
      address,
      password: hashed,
    });

    // Do not return password in response
    //here we can also use user.select("-password") to avoid password in response yahan aisa  kar sakte the
    const userSafe = {
      _id: user._id,
      name: user.name,
      email: user.email,
      age: user.age,
      address: user.address,
      createdAt: user.createdAt,
    };

    res.status(201).json({ message: "User created", user: userSafe });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
