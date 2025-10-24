// use ES modules or CommonJS depending on your Node setup.
// I'll give CommonJS (works with node easily). If you use "type":"module" in package.json, convert to import syntax.

const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      // options are fine to include
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
