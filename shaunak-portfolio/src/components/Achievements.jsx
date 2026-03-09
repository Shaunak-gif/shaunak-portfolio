import FadeIn from "./FadeIn";
import { ACHIEVEMENTS } from "../data";
import "./Achievements.css";

const TAG_COLORS = {
  Hackathon:   { border: "#c0392b", color: "#c0392b", bg: "rgba(192,57,43,0.06)" },
  Leadership:  { border: "#e8b4ae", color: "#922b21", bg: "transparent" },
  Volunteering:{ border: "#e8b4ae", color: "#922b21", bg: "transparent" },
};

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section-pad section-alt">
      <div className="container">
        <FadeIn>
          <p className="section-label">Achievements</p>
          <h2 className="section-heading">Achievements &amp; Volunteering</h2>
          <div className="divider" />
        </FadeIn>

        <div className="achievements__grid">
          {ACHIEVEMENTS.map((item, i) => {
            const tagStyle = TAG_COLORS[item.tag] || TAG_COLORS.Leadership;
            return (
              <FadeIn key={item.title} delay={i * 0.12}>
                <div className="achieve-card">
                  <div className="achieve-card__top">
                    <span className="achieve-card__icon">{item.icon}</span>
                    {item.tag && (
                      <span
                        className="mono achieve-card__tag"
                        style={{ border: `1px solid ${tagStyle.border}`, color: tagStyle.color, background: tagStyle.bg }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="achieve-card__title">{item.title}</h3>
                  <p className="achieve-card__desc">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
