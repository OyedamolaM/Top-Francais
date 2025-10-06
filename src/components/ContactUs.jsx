// src/components/ContactUs.jsx
import React from "react";
import "./ContactUs.scss";

export default function ContactUs() {
  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="subtitle">
          We’d love to hear from you. Reach out through any of the following ways:
        </p>

        <div className="contact-grid">
          {/* Instagram */}
          <div className="contact-card fade-up">
            <h3>Instagram</h3>
            <p>
              Follow our updates, reels, and French learning tips on Instagram.
            </p>
            <a
              href="https://instagram.com/topfrancaisacademy"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Visit Instagram
            </a>
          </div>

          {/* Email */}
          <div className="contact-card fade-up" style={{ animationDelay: "0.2s" }}>
            <h3>Email</h3>
            <p>
              Send us an email for general inquiries, partnerships, or support.
            </p>
            <a href="mailto:admin@topfrancaisacademy.com" className="btn">
              Send Email
            </a>
          </div>

          {/* WhatsApp */}
          <div className="contact-card fade-up" style={{ animationDelay: "0.4s" }}>
            <h3>WhatsApp</h3>
            <p>
              Chat with us directly on WhatsApp for quick responses and support.
            </p>
            <a
              href="https://wa.me/+2347051210568"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Message on WhatsApp
            </a>
          </div>

          {/* Addresses */}
          <div className="contact-card fade-up" style={{ animationDelay: "0.6s" }}>
            <h3>Our Offices</h3>
            <p><strong>France:</strong> 12 Rue de Paris, Lyon</p>
            <p><strong>UK:</strong> 45 Oxford Street, London</p>
          </div>

          {/* Partner With Us */}
          <div className="contact-card fade-up" style={{ animationDelay: "0.8s" }}>
            <h3>Partner with Us</h3>
            <p>
              Collaborate with Topfrançais to spread the French language
              worldwide.
            </p>
            <a href="/partner" className="btn">Become a Partner</a>
          </div>

          {/* Outreach */}
          <div className="contact-card fade-up" style={{ animationDelay: "1s" }}>
            <h3>Our Outreaches</h3>
            <p>
              Learn about our outreach programs like the{" "}
              <strong>National French Bee</strong> and other initiatives.
            </p>
            <a href="/outreach" className="btn">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
