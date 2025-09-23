import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero() {
  return (
        <section
        className="hero"
        style={{ backgroundImage: 'url(/topfrancais.jpg)' }}
        >
      <div className="hero__content">
        <h1>Learn French with Confidence</h1>
        <p>Join the 120 million people worldwide who learn French every day. At Topfrançais, we empower you to achieve fluency in French, unlocking new opportunities and connections.</p>
        <Link to="/courses" className="btn">Get Started</Link>
      </div>
    </section>
  );
}