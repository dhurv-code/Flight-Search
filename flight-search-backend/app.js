require("dotenv").config();

const cors = require("cors");


const express = require("express");
const mongoose = require("mongoose");
const flightRoutes = require("./routes/flightRoutes");

const app = express();
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://flight-search-s4ls.vercel.app"
  ]
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000,
})
.then(() => {
  console.log("MongoDB connected");

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
  });
})
.catch(err => {
  console.error("Mongo connection failed:", err);
});



  app.get("/api", (req, res) => {
  res.json({ status: "API is running successfully" });
});

app.use("/api", flightRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
