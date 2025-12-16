import { useState } from "react";

function App() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState("");

  const searchFlights = async () => {
    setError("");
    setFlights([]);

    if (!from || !to) {
      setError("Please enter both cities");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/search-flights?from=${from}&to=${to}`
      );
      const data = await res.json();
      setFlights(data.flights || []);
    } catch {
      setError("Failed to fetch flights");
    }
  };

  return (
    <div style={{ maxWidth: 500,textAlign:"center", margin: "40px auto", background: "#aac963ef", padding: 20, borderRadius: 8 }}>
      <h2>Flight Search</h2>

      <input
        placeholder="From (e.g. mumbai)"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <input
        placeholder="To (e.g. bangalore)"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        style={{ width: "100%", padding: 8, marginBottom: 10 }}
      />

      <button onClick={searchFlights} style={{ padding: 10, width: "100%" }}>
        Search Flights
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {flights.map((f) => (
        <div key={f.flight_id} style={{ marginTop: 15, padding: 10, border: "1px solid #ccc" }}>
          <strong>{f.airline}</strong> ({f.flight_id})<br />
          {f.departure_city} → {f.arrival_city}<br />
          ₹{f.base_price}
        </div>
      ))}
    </div>
  );
}

export default App;
