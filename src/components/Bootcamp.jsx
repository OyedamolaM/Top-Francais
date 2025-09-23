import React from "react";
import { Link } from "react-router-dom";
import "./Bootcamp.scss";

export default function Bootcamp() {
  return (
    <section className="bootcamp">
      <div className="bootcamp__content">
        <h2>Topfrançais Summer Bootcamp</h2>
        <p>
          Don't miss out on our Summer Bootcamp! Join the training now and accelerate your French fluency!
        </p>
        <Link to="/courses" className="btn">Join Now</Link>
      </div>
    </section>
  );
}
