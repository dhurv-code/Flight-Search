const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flight_id: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  airline: {
    type: String,
    required: true,
    trim: true
  },
  departure_city: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  arrival_city: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  base_price: {
    type: Number,
    required: true,
    min: 2000,
    max: 3000
  }
});

flightSchema.index({ departure_city: 1, arrival_city: 1 });

module.exports = mongoose.model("Flight", flightSchema);
