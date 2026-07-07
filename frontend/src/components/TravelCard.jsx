import Gallery from "./Gallery.jsx";

export default function TravelCard({ trip }) {
  const cover = trip.images[0];

  return (
    <div className="travel-card">
      <div className="photo">
        {cover ? <img src={cover} alt={trip.location} /> : <span>PHOTO</span>}
      </div>
      <div className="body">
        {(trip.dates || []).map((d) => (
          <p className="date mono" key={d}>
            {d}
          </p>
        ))}
        <h3>{trip.location}</h3>
        {trip.note && <p className="note">{trip.note}</p>}
        {trip.images.length > 0 && <p className="count mono">{trip.images.length} photos</p>}
        <Gallery images={trip.images.slice(1)} />
      </div>
    </div>
  );
}
