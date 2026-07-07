import ServiceClock from "../components/ServiceClock.jsx";
import TimelineItem from "../components/TimelineItem.jsx";
import Chip from "../components/Chip.jsx";
import { timeline } from "../data/timeline.js";
import { deployments } from "../data/deployments.js";
import { tdys } from "../data/tdys.js";
import { badges } from "../data/badges.js";
import { medals } from "../data/medals.js";

export default function Military() {
  return (
    <section className="page">
      <div className="label-row">
        <span className="idx mono">02</span>
        <h2>Military</h2>
        <div className="rule" />
      </div>

      <ServiceClock since="2018-12-26T15:48:00" label="Time in Service — Air National Guard" />

      <div className="section-block">
        <h3 className="sub">Timeline</h3>
        <div className="timeline">
          {timeline.map((item) => (
            <TimelineItem
              key={item.id}
              when={item.when}
              title={item.title}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3 className="sub">Deployments</h3>
        <div className="timeline">
          {deployments.map((item) => (
            <TimelineItem
              key={item.id}
              when={item.when}
              title={item.location}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3 className="sub">TDYs</h3>
        <div className="timeline">
          {tdys.map((item) => (
            <TimelineItem
              key={item.id}
              when={item.when}
              title={item.location}
              description={item.description}
              images={item.images}
            />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3 className="sub">Pins &amp; Badges / Medals &amp; Awards</h3>
        <div className="loadout">
          {medals.map((m) => (
            <Chip key={m.id} title={m.title} device={m.device} image={m.image} medal />
          ))}
          {badges.map((b) => (
            <Chip key={b.id} title={b.title} type={b.type} year={b.year} />
          ))}
        </div>
      </div>
    </section>
  );
}
