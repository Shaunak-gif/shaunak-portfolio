import { useState } from "react";
import FadeIn from "./FadeIn";
import { CONTACT_INFO } from "../data";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!formData.name || !formData.message) return;
    const text = `Hi Shaunak! 👋%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/919699421689?text=${text}`, "_blank");
    setSent(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  const update = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  return (
    <section id="contact" className="contact section-pad">
      <div className="container contact__grid">

        <FadeIn>
          <p className="section-label">Contact</p>
          <h2 className="section-heading">
            Let's build<br />
            <em className="text-red">something great</em>
          </h2>
          <div className="divider" />
          <p className="contact__intro">
            Whether it's an internship, collaboration, or just a conversation about
            technology — I'm always open to connecting.
          </p>

          <div className="contact__info-list">
            {CONTACT_INFO.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="contact__info-item"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                <div className="ico-link-dark mono">{item.icon}</div>
                <div>
                  <p className="mono contact__info-label">{item.label}</p>
                  <p className="contact__info-value">{item.value}</p>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="contact__form-box">
            <p className="contact__form-title">Send a message</p>

            {sent && (
              <div className="contact__success">
                ✓ Opening WhatsApp — message sent!
              </div>
            )}

            <div className="contact__form">
              <div className="contact__field">
                <label className="mono contact__field-label">Name</label>
                <input className="form-inp" placeholder="Your name" value={formData.name} onChange={update("name")} />
              </div>
              <div className="contact__field">
                <label className="mono contact__field-label">Email</label>
                <input className="form-inp" type="email" placeholder="your@email.com" value={formData.email} onChange={update("email")} />
              </div>
              <div className="contact__field">
                <label className="mono contact__field-label">Message</label>
                <textarea className="form-inp" rows={5} placeholder="Tell me about the opportunity..." value={formData.message} onChange={update("message")} />
              </div>
              <button className="btn-red contact__send-btn" onClick={handleSend}>
                Send via WhatsApp →
              </button>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
