<!-- Flight Search System -->

This project is a simple flight search application built as part of a full-stack assignment.
The main focus of the project is to implement a database-driven flight search, not a UI-heavy product.

<!-- [What this project does] -->

Flight data is stored in a real database (MongoDB).

Users can search flights by departure city and arrival city.

The backend fetches matching flights directly from the database.

No static JSON files, mock data, or external APIs are used.

A minimal frontend is added only to make testing and demonstration easier.

<!-- Tech Stack Used -->

Backend: Node.js, Express

Database: MongoDB (Atlas)

Frontend: React (Vite)

API Testing:  Postman

<!-- Flight Data Structure -->

Each flight stored in the database contains:

flight_id

airline

departure_city

arrival_city

base_price (between ₹2000–₹3000)

A total of 10 flights are seeded into the database.

<!-- How the search works -->

Flights are seeded into MongoDB using a script.

The backend exposes a search API.

When a search request is made, the backend queries MongoDB directly.

Matching flights are returned (maximum 10 per search).

The frontend sends user input to this API and displays the results.

All results shown come from the database in real time.

<!-- API Endpoint -->
GET /api/search-flights?from=<departure_city>&to=<arrival_city>

<!-- How to run the project
Backend -->
cd flight-search-backend
npm install
npm run dev


<!-- Frontend -->
cd flight-search-frontend
npm install
npm run dev