const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors({
  origin: ["https://dyne-creates.github.io"]
}));

app.use(express.json());

// MongoDB Connection
mongoose
    mongoose.connect(process.env.MONGO_URI)
    // .connect("mongodb+srv://dyne:dyne@cluster0.i3mwai0.mongodb.net/portfolio?retryWrites=true&w=majority")
    .then(() => console.log("MongoDB Connected"))
    .catch(console.error);

// Schema + Model

const contactSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        message: String,
    },
    {
        timestamps: true
    });

const adminSchema = new mongoose.Schema({
    username: String,
    password: String
});

const Contact = mongoose.model("contact", contactSchema, "contact");
const Admin = mongoose.model("adminAccount", adminSchema, "adminAccount");

// Routes

app.post("/contact", async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.json({ message: "Message sent successfully", contact });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/contact", async (req, res) => {
    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        res.json(contacts);
    } catch (err) {
        res.status(500).json({
            error: "Failed to retrieve messages"
        });
    }
});

app.delete("/contact/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Contact.findByIdAndDelete(id);
        res.json({ success: true, message: "Message deleted from database" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete message" });
    }
});

app.post("/admin/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const admin = await Admin.findOne({ username, password });

        if (admin) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});