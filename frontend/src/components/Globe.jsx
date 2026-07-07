import { useEffect, useRef, useState } from "react";
import GlobeGL from "react-globe.gl";
import { places } from "../data/places.js";

const COLORS = {
  travel: "#4e9be0",
  military: "#b9c2cb",
  lived: "#8fc7ff",
};

const RADIUS = {
  travel: 0.32,
  military: 0.28,
  lived: 0.5,
};

const LEGEND = [
  { type: "lived", label: "Lived" },
  { type: "travel", label: "Travel" },
  { type: "military", label: "Military" },
];

export default function Globe() {
  const globeEl = useRef();
  const wrapRef = useRef();
  const [size, setSize] = useState({ width: 320, height: 320 });

  useEffect(() => {
    function update() {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth;
      setSize({ width: w, height: Math.min(w * 0.85, 460) });
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const g = globeEl.current;
    if (!g) return;
    g.pointOfView({ lat: 27, lng: -35, altitude: 2.3 }, 0);
    const controls = g.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;
  }, [size]);

  return (
    <div className="globe-panel">
      <div className="globe-wrap" ref={wrapRef}>
        <GlobeGL
          ref={globeEl}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
          showAtmosphere
          atmosphereColor="#4e9be0"
          atmosphereAltitude={0.18}
          pointsData={places}
          pointLat="lat"
          pointLng="lng"
          pointColor={(d) => COLORS[d.type]}
          pointRadius={(d) => RADIUS[d.type]}
          pointAltitude={0.012}
          pointResolution={4}
          pointLabel={(d) => `<div class="globe-tip"><strong>${d.label}</strong><div>${d.sub}</div></div>`}
        />
      </div>
      <div className="globe-legend mono">
        {LEGEND.map((l) => (
          <span key={l.type} className="globe-legend-item">
            <span className={`dot dot-${l.type}`} />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  );
}
