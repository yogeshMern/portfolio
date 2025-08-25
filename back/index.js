const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Contact = require("./model/contactModel");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const checkEmail = await Contact.findOne({ email });
    if (checkEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const contact = new Contact({ name, email, message });

    await contact.save(); // Wait until it's saved in MongoDB

    res.status(201).json({
      success: true,
      message: "Contact saved successfully",
      contact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// Database Connection & Server Start
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");
    const port = process.env.PORT || 8080;
    app.listen(port, () => {
      console.log(`🚀 Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });
