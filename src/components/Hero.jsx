import { Link } from "react-router-dom";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>Speak French Fast with TopFrancais</h1>
        <p>
          Join our proven program to master French quickly and confidently. 
          100% money-back guarantee if you’re not satisfied.
        </p>
        <Link to="/courses" className="btn">Get Started</Link>
      </div>
    </section>
  );
}
