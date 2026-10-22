import { certs } from "../data/certs.js";

export default function Certs() {
  return (
    <section className="page">
      <div className="label-row">
        <span className="idx mono">06</span>
        <h2>Certifications</h2>
        <div className="rule" />
      </div>

      <div className="cert-list">
        {certs.map((cert) => (
          <article className="cert-card" key={cert.id}>
            <a className="cert-preview" href={cert.file} target="_blank" rel="noreferrer">
              <img src={cert.preview} alt={`${cert.title} certificate`} />
            </a>
            <div className="cert-body">
              <div className="cert-meta mono">
                <span>{cert.date}</span>
                {cert.hours && <span>{cert.hours} hrs</span>}
              </div>
              <h3>{cert.title}</h3>
              <p className="org">
                {cert.issuer}
                {cert.location && ` — ${cert.location}`}
              </p>
              <p className="desc">{cert.description}</p>
              <div className="stack">
                {cert.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <a className="cert-link mono" href={cert.file} target="_blank" rel="noreferrer">
                View certificate ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      {certs.length === 0 && <p className="empty-note mono">No certifications yet.</p>}
    </section>
  );
}
