export default function Gallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="gallery">
      {images.map((src) => (
        <a key={src} href={src} target="_blank" rel="noreferrer">
          <img src={src} alt="" loading="lazy" />
        </a>
      ))}
    </div>
  );
}
