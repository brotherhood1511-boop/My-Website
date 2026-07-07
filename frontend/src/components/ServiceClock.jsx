import { useEffect, useState } from "react";

function pad(n) {
  return String(n).padStart(2, "0");
}

function computeElapsed(since) {
  const now = new Date();
  let diffMs = now - since;
  if (diffMs < 0) diffMs = 0;

  const totalSeconds = Math.floor(diffMs / 1000);
  let years = now.getFullYear() - since.getFullYear();
  const beforeAnniversary =
    now.getMonth() < since.getMonth() ||
    (now.getMonth() === since.getMonth() && now.getDate() < since.getDate());
  if (beforeAnniversary) years -= 1;

  const anniversary = new Date(since);
  anniversary.setFullYear(since.getFullYear() + years);
  const daysSinceAnniversary = Math.floor((now - anniversary) / 86400000);

  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { years, days: daysSinceAnniversary, hours, minutes, seconds };
}

export default function ServiceClock({ since, label }) {
  const sinceDate = new Date(since);
  const [elapsed, setElapsed] = useState(() => computeElapsed(sinceDate));

  useEffect(() => {
    const id = setInterval(() => setElapsed(computeElapsed(sinceDate)), 1000);
    return () => clearInterval(id);
  }, [since]);

  return (
    <div className="clock">
      <p className="clock-label">{label}</p>
      <div className="clock-row mono">
        <div className="unit">
          <span className="n">{elapsed.years}</span>
          <span className="u">Years</span>
        </div>
        <div className="unit">
          <span className="n">{pad(elapsed.days)}</span>
          <span className="u">Days</span>
        </div>
        <div className="unit">
          <span className="n">{pad(elapsed.hours)}</span>
          <span className="u">Hours</span>
        </div>
        <div className="unit">
          <span className="n">{pad(elapsed.minutes)}</span>
          <span className="u">Min</span>
        </div>
        <div className="unit">
          <span className="n">{pad(elapsed.seconds)}</span>
          <span className="u">Sec</span>
        </div>
      </div>
      <p className="since mono">Since {since}</p>
    </div>
  );
}
