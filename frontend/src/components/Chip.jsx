const ICONS = {
  medal: "★",
  qualification: "▲",
  career: "◆",
  unit: "●",
};

export default function Chip({ title, type, year, device, image, medal }) {
  const icon = medal ? ICONS.medal : ICONS[type?.toLowerCase()] || ICONS.unit;

  return (
    <div className={medal ? "chip medal" : "chip"}>
      {image ? (
        <img className="ribbon" src={image} alt={`${title} ribbon`} />
      ) : (
        <div className="icon mono">{icon}</div>
      )}
      <h3>{title}</h3>
      {type && <p className="type">{type}</p>}
      {device && <p className="device mono">{device}</p>}
      {year && <p className="yr">{year}</p>}
    </div>
  );
}
