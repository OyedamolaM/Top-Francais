// src/components/Bootcamp.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Bootcamp.scss";

export default function Bootcamp() {
  return (
    <section className="bootcamp">
      <div className="bootcamp__container">
        <h2 className="animate">Topfrançais Summer Bootcamp</h2>
        <p className="bootcamp__description animate">
          Don't miss out on our Summer Bootcamp! Join the training now and accelerate your French fluency.
        </p>
        <span className="bootcamp__price animate">Coming Soon</span>
        <Link to="/courses" className="btn bootcamp__btn animate">
          Register Now
        </Link>
      </div>
    </section>
  );
}
