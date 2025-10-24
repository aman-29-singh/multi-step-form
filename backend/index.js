const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// load env
dotenv.config();

connectDB();

const app = express();

// Allow requests from your frontend origin (Vite dev server default)
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || "*" // for dev you can allow *; for production set exact origin
}));//BY this we can enable frontend port request so that frontent port can access our server port
//we will secure this port in our .env file and we do not want to share this .env file in our Github

app.use(express.json()); // parse JSON body

// routes
app.use("/api/users", require("./routes/userRoutes"));//http://localhost:3000/api/users hit on this
//this api http://localhost:3000/api/users is used in frontend to store users data

// just for checking
app.get("/", (req, res) => res.send("API is running"));//http://localhost:3000/ hit on this to  test

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
