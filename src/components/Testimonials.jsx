import React from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  const reviews = [
    {
      name: "Marie Dupont",
      text: "TopFrancais helped me go from zero to holding conversations in French within 3 months. The lessons are engaging and easy to follow!",
      role: "Beginner Learner",
    },
    {
      name: "James O'Connor",
      text: "I tried other courses, but this is the one that kept me consistent. The tutors are amazing and the practice sessions are gold!",
      role: "Intermediate Learner",
    },
    {
      name: "Fatima Ali",
      text: "The premium plan with 1-on-1 coaching is worth every penny. My confidence in speaking French skyrocketed!",
      role: "Business Professional",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      <p className="subtitle">Trusted by learners from around the world</p>

      <div className="testimonial-cards">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-card">
            <p className="text">“{review.text}”</p>
            <h4>{review.name}</h4>
            <span className="role">{review.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
