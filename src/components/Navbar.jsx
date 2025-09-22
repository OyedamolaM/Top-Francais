import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">TopFrancais</div>

      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="navbar__cta">
        <Link to="/login" className="btn">Login</Link>
      </div>
    </header>
  );
}
