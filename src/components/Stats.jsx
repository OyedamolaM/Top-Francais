import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Stats.scss";

export default function Stats() {
  const stats = [
    { number: 1, prefix: "#", label: "Online French Academy" },
    { number: 1000, suffix: "+", label: "Students Enrolled" },
    { number: 18000, suffix: "+", label: "Learners impacted worldwide" },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Detect when stats section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="stats__container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <StatCard
              key={i}
              number={s.number}
              label={s.label}
              prefix={s.prefix}
              suffix={s.suffix}
              animate={visible}
            />
          ))}
        </div>

        <div className="stats__cta">
          <p>
            Sign up with <strong>Topfrançais</strong> today and start your French learning journey!
          </p>
          <Link to="/signup" className="btn">Get Started</Link>

          <div className="stats__rating">
            {"★".repeat(5)} <span>Rated 5/5 by students</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label, prefix = "", suffix = "", animate }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!animate) return;

    // let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * number);
      setCount(value);
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }, [animate, number]);

  return (
    <div className="stats__card">
      <h3>{prefix}{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  );
}
