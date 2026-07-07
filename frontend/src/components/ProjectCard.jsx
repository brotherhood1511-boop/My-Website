export default function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      <h3>{project.title}</h3>
      <p className="desc">{project.description}</p>
      {(project.github || project.demo) && (
        <div className="links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Demo
            </a>
          )}
        </div>
      )}
      <div className="stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
