require("dotenv").config();
const express = require('express');

const cors = require('cors');

const app = express();

const dbConfig = require('./config/dbConfig');

const portfolioRoute = require('./routes/portfolioRoute');

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// require("dotenv").config();

app.use(
  cors({
    origin: ["http://localhost:5000", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);

app.use(express.json());
app.use(bodyParser.json());

app.use('/api/portfolio', portfolioRoute);

const port = process.env.PORT || 5000;

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Mongoose Schema and Model
const contactSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// API Endpoint
app.post("/api/contact", async (req, res) => {
  const { email, name, message } = req.body;

  if (!email || !name || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newContact = new Contact({ email, name, message });
    await newContact.save();
    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

// Start Server

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

