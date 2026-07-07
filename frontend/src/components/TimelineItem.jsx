import Gallery from "./Gallery.jsx";

export default function TimelineItem({ when, title, description, images }) {
  return (
    <div className="timeline-item">
      <div className="when mono">{when}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Gallery images={images} />
      </div>
    </div>
  );
}
