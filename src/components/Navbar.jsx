import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      {/* Logo on the left */}
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>TopFrançais Academy</Link>
      </div>

      {/* Desktop Links + CTA together */}
      <div className="navbar__right">
        <nav className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/testimonials">Testimonials</Link>
        </nav>

        <div className="navbar__cta">
          {/* scrolls to pricing section on homepage */}
          <a href="#courses-pricing" className="btn wide">Get Started</a>
        </div>
      </div>

      {/* Hamburger menu */}
      <button
        className={`navbar__toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Backdrop */}
      <div
        className={`navbar__backdrop ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <nav className={`navbar__mobile ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/resources" onClick={closeMenu}>Resources</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
        <a href="#courses-pricing" className="btn wide" onClick={closeMenu}>
          View Pricing
        </a>
      </nav>
    </header>
  );
}
