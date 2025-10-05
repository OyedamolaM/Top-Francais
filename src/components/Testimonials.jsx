import React, { useRef, useState, useEffect } from "react";
import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Beginner Learner",
    date: "March 15, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video: "https://res.cloudinary.com/demo/video/upload/v1699999999/sample.mp4",
  },
  {
    id: 2,
    name: "James O'Connor",
    role: "Intermediate Learner",
    date: "April 10, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video: "https://res.cloudinary.com/demo/video/upload/v1699999998/dog.mp4",
  },
  {
    id: 3,
    name: "Fatima Ali",
    role: "Business Professional",
    date: "May 2, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video: "https://res.cloudinary.com/demo/video/upload/v1699999997/flower.mp4",
  },
  {
    id: 4,
    name: "Lucas Hernandez",
    role: "Advanced Speaker",
    date: "May 20, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video: "https://res.cloudinary.com/demo/video/upload/v1699999996/bike.mp4",
  },
  {
    id: 5,
    name: "Sophie Laurent",
    role: "Traveler & Enthusiast",
    date: "June 12, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video: "https://res.cloudinary.com/demo/video/upload/v1699999995/car.mp4",
  },
  {
    id: 6,
    name: "Ahmed Musa",
    role: "French Language Coach",
    date: "July 1, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video: "https://res.cloudinary.com/demo/video/upload/v1699999994/surf.mp4",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Scroll to the exact card position
  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const cards = container.querySelectorAll(".testimonial-card");
    const target = cards[index];
    if (!target) return;

    const left =
      target.offsetLeft - (container.clientWidth - target.offsetWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  };

  // ✅ Handle dot click
  const handleDotClick = (index) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  // ✅ Auto slide every 20s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToCard(next);
        return next;
      });
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Sync active index on scroll
  useEffect(() => {
    const container = scrollRef.current;
    const cards = container.querySelectorAll(".testimonial-card");

    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;

      cards.forEach((card, i) => {
        const distance = Math.abs(
          container.scrollLeft -
            (card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <p className="subtitle">
        Hear real feedback from our learners across the world 🌍
      </p>

      <div className="testimonials-wrapper">
        <div className="testimonial-cards" ref={scrollRef}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="video-wrapper">
                <video src={t.video} controls preload="metadata" />
                <div className="overlay">
                  <img src={t.logo} alt={t.name} className="logo-overlay" />
                  <span className="overlay-text">{t.name.split(" ")[0]}</span>
                </div>
              </div>
              <div className="testimonial-info">
                <h4>{t.name}</h4>
                <span className="role">{t.role}</span>
                <span className="date">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
