import ResumeItem from "../components/ResumeItem.jsx";
import { experience } from "../data/experience.js";
import { education, honors } from "../data/education.js";

export default function Resume() {
  return (
    <section className="page">
      <div className="label-row">
        <span className="idx mono">03</span>
        <h2>Resume — Service &amp; Work History</h2>
        <div className="rule" />
      </div>

      <a className="dl-btn mono" href="/resume.pdf">
        [ Download PDF Resume ]
      </a>

      <div className="section-block">
        <h3 className="sub">Experience</h3>
        <div className="resume-list">
          {experience.map((item) => (
            <ResumeItem
              key={item.title}
              when={item.when}
              title={item.title}
              org={item.org}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3 className="sub">Education</h3>
        <div className="resume-list">
          {education.map((item) => (
            <ResumeItem
              key={item.title}
              when={item.when}
              title={item.title}
              org={item.org}
              description={item.description}
            />
          ))}
        </div>
      </div>

      <div className="section-block">
        <h3 className="sub">Honors &amp; Achievements</h3>
        <ul className="honors-list">
          {honors.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
