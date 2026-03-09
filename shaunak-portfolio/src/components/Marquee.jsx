import { MARQUEE_ITEMS } from "../data";
import "./Marquee.css";

export default function Marquee() {
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {[...Array(2)].map((_, r) => (
          <div key={r} className="marquee-row">
            {MARQUEE_ITEMS.map((t, i) => (
              <span key={i} className="mono marquee-item">{t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
