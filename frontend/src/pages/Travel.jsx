import TravelCard from "../components/TravelCard.jsx";
import { travelEntries } from "../data/travelEntries.js";

export default function Travel() {
  return (
    <section className="page">
      <div className="label-row">
        <span className="idx mono">04</span>
        <h2>Travel — Flight Log</h2>
        <div className="rule" />
      </div>

      <div className="travel-grid">
        {travelEntries.map((trip) => (
          <TravelCard key={trip.id} trip={trip} />
        ))}
      </div>
    </section>
  );
}
