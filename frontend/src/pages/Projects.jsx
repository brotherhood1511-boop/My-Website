import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects, CATEGORIES } from "../data/projects.js";

export default function Projects() {
  const allTags = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.stack.forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }, []);

  const [active, setActive] = useState(new Set());

  function toggleTag(tag) {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  const visible = projects.filter(
    (p) => active.size === 0 || p.stack.some((t) => active.has(t))
  );

  const byCategory = CATEGORIES.map((category) => ({
    category,
    items: visible.filter((p) => p.category === category),
  })).filter((group) => group.items.length > 0);

  return (
    <section className="page">
      <div className="label-row">
        <span className="idx mono">05</span>
        <h2>Projects — filter by stack</h2>
        <div className="rule" />
      </div>

      <div className="filters">
        <button className={active.size === 0 ? "active" : ""} onClick={() => setActive(new Set())}>
          All
        </button>
        {allTags.map((tag) => (
          <button key={tag} className={active.has(tag) ? "active" : ""} onClick={() => toggleTag(tag)}>
            {tag}
          </button>
        ))}
      </div>

      {byCategory.map((group) => (
        <div className="section-block" key={group.category}>
          <h3 className="sub">{group.category}</h3>
          <div className="proj-grid">
            {group.items.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      ))}

      {visible.length === 0 && <p className="empty-note mono">No projects match that filter.</p>}
    </section>
  );
}
