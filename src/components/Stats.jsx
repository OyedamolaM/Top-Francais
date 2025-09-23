import "./Stats.scss";
import { Link } from "react-router-dom";

export default function Stats() {
  const stats = [
    { number: "120M+", label: "People learn French daily" },
    { number: "#1", label: "Most studied language in the world" },
    { number: "77M+", label: "Native French speakers worldwide" },
  ];

  return (
    <section className="stats">
      <div className="stats__container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div key={i} className="stats__card">
              <h3>{s.number}</h3>
              <p>{s.label}</p>
            </div>
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
