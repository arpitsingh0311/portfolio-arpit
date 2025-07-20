// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

const contactRoutes = require("./routes/contact");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;

// ------------ Code For Deployment -------------

if(process.env.NODE_ENV === "production") {
  const dirpath = path.resolve();
  app.use(express.static('./client/dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(dirpath, './client/dist', 'index.html'));
  });
}


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
