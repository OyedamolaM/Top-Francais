import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/topfrancais-hero-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero__content">
        <h1>Learn French with Confidence</h1>
        <p>Join the 120 million people worldwide who learn French every day.</p>
        <p>
          At Topfrançais, we empower you to achieve fluency in French, unlocking
          new opportunities and connections.
        </p>
        <Link to="/courses" className="btn">
          Get Started
        </Link>
      </div>
    </section>
  );
}
