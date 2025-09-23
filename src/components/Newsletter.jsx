// src/components/Newsletter.jsx
import React, { useState } from "react";
import "./Newsletter.scss";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <div className="newsletter__container animate">
        <h2>Stay Updated with Topfrançais</h2>
        <p>Subscribe to get the latest courses, tips, and exclusive offers delivered straight to your inbox.</p>
        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
}
