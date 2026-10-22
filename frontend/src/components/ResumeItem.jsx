export default function ResumeItem({ when, title, org, description, certificate }) {
  return (
    <div className="resume-item">
      <div className="when mono">{when}</div>
      <div>
        <h3>{title}</h3>
        {org && <p className="org">{org}</p>}
        {description && <p className="desc">{description}</p>}
        {certificate && (
          <a className="cert-link mono" href={certificate} target="_blank" rel="noreferrer">
            View certificate ↗
          </a>
        )}
      </div>
    </div>
  );
}
