export default function ResumeItem({ when, title, org, description }) {
  return (
    <div className="resume-item">
      <div className="when mono">{when}</div>
      <div>
        <h3>{title}</h3>
        {org && <p className="org">{org}</p>}
        {description && <p className="desc">{description}</p>}
      </div>
    </div>
  );
}
