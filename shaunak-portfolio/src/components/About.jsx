import FadeIn from "./FadeIn";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about section-pad">
      <div className="container about__grid">

        <FadeIn>
          <p className="section-label">About Me</p>
          <h2 className="section-heading">
            Engineering solutions<br />
            <em className="text-red">at the intersection</em><br />
            of code &amp; intelligence
          </h2>
          <div className="divider" />

          <p className="about__para">
            I'm a Computer Engineering student with a strong interest in software development,
            machine learning, and DevOps. I enjoy solving complex algorithmic problems and
            actively practice coding on platforms like LeetCode.
          </p>
          <p className="about__para">
            I have experience working on machine learning and web development projects focused
            on real-world applications, and I aim to build scalable, intelligent systems that
            solve meaningful problems.
          </p>

          <div className="about__education">
            <div className="about__edu-item">
              <div className="about__edu-dot" />
              <p className="about__edu-text">
                <strong>B.Tech, E&amp;TC Engineering</strong> — Vishwakarma Institute of Technology, Pune
              </p>
            </div>
            <div className="about__edu-item">
              <div className="about__edu-dot" />
              <p className="about__edu-text">
                <strong>Diploma</strong> — Marathwada Mitra Mandal's Polytechnic, Pune
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="about__card-wrap">
            <div className="about__card">
              <div className="about__card-icon">👨‍💻</div>
              <div className="about__card-badge">
                <p className="mono about__card-label">Current Status</p>
                <p className="about__card-value">Open to Internships &amp; Full-time</p>
              </div>
            </div>
            <div className="about__deco about__deco--tr" />
            <div className="about__deco about__deco--bl" />
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
