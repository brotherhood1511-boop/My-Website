import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import portrait from "../assets/travel/Italy/IMG_5416.PNG";

const Globe = lazy(() => import("../components/Globe.jsx"));

const teasers = [
  { idx: "01", to: "/military", title: "Military", desc: "Service clock, deployments, TDYs, badges & medals." },
  { idx: "02", to: "/resume", title: "Resume", desc: "Service and work history, downloadable PDF." },
  { idx: "03", to: "/travel", title: "Travel", desc: "A running log of trips, from Shenandoah to Italy." },
  { idx: "04", to: "/projects", title: "Projects", desc: "Software, cyber/networking, and Packet Tracer labs." },
];

export default function Home() {
  return (
    <section className="page">
      <Suspense fallback={<div className="globe-panel globe-loading mono">Loading globe…</div>}>
        <Globe />
      </Suspense>

      <div className="dossier">
        <div className="top">
          <span>Personnel File · Active</span>
          <span className="status mono">Online</span>
        </div>
        <div className="body">
          <div className="photo">
            <img src={portrait} alt="Dominick Siciliano" />
          </div>
          <div>
            <h1 className="name">Dominick Siciliano</h1>
            <div className="tags">
              <span>Software Developer</span>
              <span>Data Operations</span>
              <span>Air National Guard</span>
            </div>
            <p className="bio">
              I write software during the day and pull knowledge-management shifts with the Air National
              Guard the rest of the time. This site is where those two lives meet — the code I ship, the
              time in service, and the places travel has taken me in between.
            </p>
            <div className="fields mono">
              <div>
                <div className="f-label">Base</div>
                <div className="f-val">Prince Frederick, MD</div>
              </div>
              <div>
                <div className="f-label">Focus</div>
                <div className="f-val">Full-stack + Data Ops</div>
              </div>
              <div>
                <div className="f-label">School</div>
                <div className="f-val">Flatiron School</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teasers">
        {teasers.map((t) => (
          <Link key={t.to} to={t.to} className="teaser">
            <p className="t-idx mono">{t.idx}</p>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
