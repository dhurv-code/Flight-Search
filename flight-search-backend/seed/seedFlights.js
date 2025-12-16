require("dotenv").config();
const mongoose = require("mongoose");
const Flight = require("../models/Flight");

const flights = [
  { flight_id: "AI101", airline: "Air India", departure_city: "delhi", arrival_city: "kanpur", base_price: 2500 },
  { flight_id: "6E202", airline: "IndiGo", departure_city: "delhi", arrival_city: "mumbai", base_price: 2300 },
  { flight_id: "UK303", airline: "Vistara", departure_city: "delhi", arrival_city: "panaji", base_price: 2800 },
  { flight_id: "SG404", airline: "SpiceJet", departure_city: "delhi", arrival_city: "mumbai", base_price: 2200 },
  { flight_id: "AI505", airline: "Air India", departure_city: "delhi", arrival_city: "bangalore", base_price: 2600 },
  { flight_id: "6E606", airline: "IndiGo", departure_city: "delhi", arrival_city: "bangalore", base_price: 2400 },
  { flight_id: "UK707", airline: "Vistara", departure_city: "mumbai", arrival_city: "bangalore", base_price: 2700 },
  { flight_id: "SG808", airline: "SpiceJet", departure_city: "mumbai", arrival_city: "delhi", base_price: 2100 },
  { flight_id: "AI909", airline: "Air India", departure_city: "bangalore", arrival_city: "delhi", base_price: 2900 },
  { flight_id: "6E010", airline: "IndiGo", departure_city: "prayagraj", arrival_city: "dehradun", base_price: 2350 },
  { flight_id: "8PD10", airline: "IndiGo", departure_city: "prayagraj", arrival_city: "jaipur", base_price: 2480 },
  { flight_id: "6PJ60", airline: "IndiGo", departure_city: "bangalore", arrival_city: "hyderabad", base_price: 2150 },
  { flight_id: "DK810", airline: "IndiGo", departure_city: "dehradun", arrival_city: "kolkata", base_price: 2685 },
  { flight_id: "lg600", airline: "Air India", departure_city: "lucknow", arrival_city: "goa", base_price: 2200 }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected ");
    



    await Flight.collection.drop().catch(() => console.log("Collection did not exist"));

    const result = await Flight.insertMany(flights);
    console.log("Inserted count:", result.length);

  } catch (err) {
    console.error("Seeding failed:", err);
  } finally {
    await mongoose.disconnect();
    process.exit();
  }
}
seed();
