import React from "react";
import "./WhyChoose.scss";

export default function WhyChoose() {
  const features = [
    "Comprehensive French language programs",
    "Personalized attention from experienced tutors",
    "Flexible scheduling to accommodate your needs",
    "Access to our vibrant French-speaking community",
  ];

  return (
    <section className="why-choose" id="why-choose">
      <div className="why-choose__container">
        <h2>Why Choose Topfrançais?</h2>
        <p className="subtitle">
          At Topfrançais, we empower learners to achieve fluency in French
          through innovative and personalized teaching methods.
        </p>

        <ul className="why-choose__features">
          {features.map((feature, idx) => (
            <li key={idx} className="feature">
              <span className="feature__icon">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="btn why-choose__cta">
          Join Topfrançais Today
        </button>
      </div>
    </section>
  );
}
