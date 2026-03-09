import FadeIn from "./FadeIn";
import { SKILLS } from "../data";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills section-pad section-alt">
      <div className="container">
        <FadeIn>
          <p className="section-label">Tech Stack</p>
          <h2 className="section-heading">Tools of the trade</h2>
          <div className="divider" />
        </FadeIn>

        {Object.entries(SKILLS).map(([category, items], ci) => (
          <FadeIn key={category} delay={ci * 0.08}>
            <div className="skills__group">
              <p className="mono skills__category">
                <span className="skills__category-line" />
                {category}
              </p>
              <div className="skills__grid">
                {items.map(skill => (
                  <div key={skill.name} className="skill-card">
                    <div className="skill-card__icon">{skill.icon}</div>
                    <p className="skill-card__name">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
