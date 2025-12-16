const express = require("express");
const Flight = require("../models/Flight");

const router = express.Router();


router.post("/add-flight", async (req, res) => {
  try {
    const {flight_id,airline,departure_city,arrival_city,base_price} = req.body;

    
    if (
      !flight_id ||!airline ||!departure_city ||!arrival_city ||!base_price
    ) {
      return res.status(400).json({
        error: "All flight fields are required"
      });
    }

    const flight = new Flight({
      flight_id,
      airline,
      departure_city: departure_city.toLowerCase(),
      arrival_city: arrival_city.toLowerCase(),
      base_price
    });

    await flight.save();

    return res.status(201).json({
      message: "Flight added successfully",
      flight
    });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

router.get("/search-flights", async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to) {
      return res.status(400).json({
        error: "from and to are required"
      });
    }

    const flights = await Flight.find({
      departure_city: from.toLowerCase(),
      arrival_city: to.toLowerCase()
    }).limit(10);

    return res.json({ flights });

  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
});

module.exports = router;
