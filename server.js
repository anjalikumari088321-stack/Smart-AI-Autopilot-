const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected Successfully!");
})
.catch((error) => {
    console.log("MongoDB Error:", error.message);
});

// Home Route
app.get("/", (req, res) => {
    res.send("Smart AI AutoPilot Backend Running!");
});

// Status API
app.get("/api/status", (req, res) => {
    res.json({
        success: true,
        message: "AutoPilot Backend is Working!"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
