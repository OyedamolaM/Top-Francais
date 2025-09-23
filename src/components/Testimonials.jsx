import React, { useRef, useEffect, useState } from "react";
import "./Testimonials.scss";

const Testimonials = () => {
  const reviews = [
    {
      name: "Marie Dupont",
      text: "TopFrancais helped me go from zero to holding conversations in French within 3 months. The lessons are engaging and easy to follow!",
      role: "Beginner Learner",
      img: "/images/marie.jpg",
      rating: 5,
      date: "March 15, 2025",
    },
    {
      name: "James O'Connor",
      text: "I tried other courses, but this is the one that kept me consistent. The tutors are amazing and the practice sessions are gold!",
      role: "Intermediate Learner",
      img: "/images/james.jpg",
      rating: 5,
      date: "April 10, 2025",
    },
    {
      name: "Fatima Ali",
      text: "The premium plan with 1-on-1 coaching is worth every penny. My confidence in speaking French skyrocketed!",
      role: "Business Professional",
      img: "/images/fatima.jpg",
      rating: 5,
      date: "May 2, 2025",
    },
  ];

  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll carousel on mobile without jumping the page
  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const gap = parseInt(getComputedStyle(container).gap) || 16;
      const cardWidth = container.children[0].offsetWidth + gap;
      const nextIndex = (activeIndex + 1) % container.children.length;

      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      });

      setActiveIndex(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleDotClick = (idx) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const gap = parseInt(getComputedStyle(container).gap) || 16;
    const cardWidth = container.children[0].offsetWidth + gap;

    container.scrollTo({
      left: idx * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(idx);
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
      <p className="subtitle">Trusted by learners from around the world</p>

      <div className="testimonials-wrapper">
        <div className="testimonial-cards" ref={containerRef}>
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <img src={review.img} alt={review.name} className="testimonial-img" />
              <div className="testimonial-rating">
                {"★".repeat(review.rating)}
                <span>{review.date}</span>
              </div>
              <p className="text">“{review.text}”</p>
              <h4>{review.name}</h4>
              <span className="role">{review.role}</span>
            </div>
          ))}
        </div>

        {/* Dots for mobile */}
        <div className="testimonial-dots">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === activeIndex ? "active" : ""}`}
              onClick={() => handleDotClick(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
