import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import "./Navbar.css";

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="navbar__logo">
          <div className="navbar__dot" />
          <span className="mono navbar__brand">SHAUNAK.DEV</span>
        </div>

        <div className="navbar__links">
          {NAV_LINKS.map(l => (
            <span
              key={l}
              className={`nav-link ${scrolled ? "nav-link--dark" : "nav-link--light"}`}
              onClick={() => handleNav(l.toLowerCase())}
            >
              {l}
            </span>
          ))}
          <button className="btn-red btn-red--sm" onClick={() => handleNav("contact")}>
            Hire Me
          </button>
        </div>

        <button
          className="navbar__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          {NAV_LINKS.map(l => (
            <span key={l} className="nav-link nav-link--dark mobile-menu__link" onClick={() => handleNav(l.toLowerCase())}>
              {l}
            </span>
          ))}
          <button className="btn-red" style={{ alignSelf: "flex-start" }} onClick={() => handleNav("contact")}>
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}
