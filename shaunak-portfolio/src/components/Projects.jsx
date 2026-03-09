import FadeIn from "./FadeIn";
import { PROJECTS } from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects section-pad">
      <div className="container">
        <FadeIn>
          <p className="section-label">Projects</p>
          <h2 className="section-heading">What I've built</h2>
          <div className="divider" />
        </FadeIn>

        <div className="projects__grid">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.title} delay={i * 0.13}>
              <div className="proj-card">
                <div
                  className="proj-card__header"
                  style={{ background: `linear-gradient(135deg, ${project.color} 0%, #160707 100%)` }}
                >
                  <span className="proj-card__num mono">{project.num}</span>
                  <p className="mono proj-card__label">Project {project.num}</p>
                  <h3 className="proj-card__title">{project.title}</h3>
                </div>

                <div className="proj-card__body">
                  <p className="proj-card__desc">{project.desc}</p>

                  <ul className="proj-card__features">
                    {project.features.map(f => (
                      <li key={f} className="proj-card__feature">
                        <div className="proj-card__bullet" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="proj-card__tags">
                    {project.tech.map(t => (
                      <span key={t} className="tag mono">{t}</span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    className="mono proj-card__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub <span>→</span>
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
