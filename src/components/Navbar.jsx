import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>TopFrancais</Link>
      </div>

      {/* Desktop Links */}
      <nav className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Desktop CTA */}
      <div className="navbar__cta">
        <Link to="/login" className="btn">Login</Link>
      </div>

      {/* Hamburger */}
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
        <Link to="/courses" onClick={closeMenu}>Courses</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/login" className="btn" onClick={closeMenu}>Login</Link>
      </nav>
    </header>
  );
}
