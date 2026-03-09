import { FOOTER_LINKS } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <div className="footer__logo">
          <div className="footer__dot" />
          <span className="mono footer__name">SHAUNAK.DEV</span>
        </div>
        <p className="mono footer__copy">© 2026 Shaunak Dandavate</p>
      </div>

      <div className="footer__links">
        {FOOTER_LINKS.map(s => (
          <a
            key={s.label}
            href={s.href}
            className="ico-link mono"
            title={s.label}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
