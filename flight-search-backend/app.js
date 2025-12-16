const cors = require("cors");


const express = require("express");
const mongoose = require("mongoose");
const flightRoutes = require("./routes/flightRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://db_user:flysky@flight-search.umfmshr.mongodb.net/?appName=flight-search")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api", flightRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
