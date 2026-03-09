import { SOCIAL_LINKS } from "../data";
import "./Hero.css";

export default function Hero({ scrollTo }) {
  return (
    <section id="hero" className="hero">
      {/* Background geometry */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__ring hero__ring--lg" />
        <div className="hero__ring hero__ring--md" />
        <div className="hero__square hero__square--outline" />
        <div className="hero__square hero__square--filled" />
        {[...Array(8)].map((_, i) => (
          <div key={i} className="hero__dot" style={{
            left: `${8 + i * 11}%`,
            top: `${25 + (i % 4) * 15}%`,
            animationDuration: `${5 + i * 0.7}s`,
            animationDelay: `${i * 0.4}s`,
          }} />
        ))}
      </div>

      <div className="hero__content">
        {/* Status badge */}
        <div className="hero__badge">
          <div className="hero__badge-line" />
          <span className="mono hero__badge-text">Available for opportunities</span>
          <div className="hero__badge-dot" />
        </div>

        <h1 className="hero__name">
          Shaunak<br />
          <span className="hero__name--gradient">Dandavate</span>
        </h1>

        <p className="mono hero__subtitle">
          Computer Engineering Student &nbsp;·&nbsp; DevOps Engineer &nbsp;·&nbsp; ML Enthusiast
        </p>

        <p className="hero__tagline">
          Passionate about building intelligent systems, solving algorithmic problems,
          and creating impactful technology solutions.
        </p>

        <div className="hero__buttons">
          <button className="btn-red" onClick={() => scrollTo("projects")}>View Projects</button>
          <button className="btn-ghost" onClick={() => scrollTo("contact")}>Contact Me</button>
        </div>

        <div className="hero__socials">
          {SOCIAL_LINKS.map(s => (
            <a key={s.label} href={s.href} className="ico-link mono" title={s.label} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
