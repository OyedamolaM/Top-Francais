import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Smooth scroll settings
  const scrollProps = {
    smooth: true,
    duration: 500,
    offset: -70, // adjust based on navbar height
    onClick: closeMenu,
  };

  // Detect if we're already on homepage
  const isHomePage = location.pathname === "/";

  return (
    <header className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        {isHomePage ? (
          <ScrollLink to="hero" {...scrollProps}>
            TopFrançais Academy
          </ScrollLink>
        ) : (
          <Link to="/" onClick={closeMenu}>
            TopFrançais Academy
          </Link>
        )}
      </div>

      {/* Desktop Navigation */}
      <div className="navbar__right">
        <nav className="navbar__links">
          {isHomePage ? (
            <>
              <ScrollLink to="hero" {...scrollProps}>Home</ScrollLink>
              <ScrollLink to="resources" {...scrollProps}>Resources</ScrollLink>
              <ScrollLink to="about" {...scrollProps}>About</ScrollLink>
              <ScrollLink to="contact" {...scrollProps}>Contact</ScrollLink>
              <ScrollLink to="testimonials" {...scrollProps}>Testimonials</ScrollLink>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/resources">Resources</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/testimonials">Testimonials</Link>
            </>
          )}
        </nav>

        <div className="navbar__cta">
          {isHomePage ? (
            <ScrollLink to="courses-pricing" {...scrollProps} className="btn wide">
              Get Started
            </ScrollLink>
          ) : (
            <Link to="/" className="btn wide" onClick={closeMenu}>
              Get Started
            </Link>
          )}
        </div>
      </div>

      {/* Hamburger Button */}
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
        {isHomePage ? (
          <>
            <ScrollLink to="hero" {...scrollProps}>Home</ScrollLink>
            <ScrollLink to="resources" {...scrollProps}>Resources</ScrollLink>
            <ScrollLink to="about" {...scrollProps}>About</ScrollLink>
            <ScrollLink to="contact" {...scrollProps}>Contact</ScrollLink>
            <ScrollLink to="testimonials" {...scrollProps}>Testimonials</ScrollLink>
            <ScrollLink to="courses-pricing" {...scrollProps} className="btn wide">
              View Pricing
            </ScrollLink>
          </>
        ) : (
          <>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/resources" onClick={closeMenu}>Resources</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/contact" onClick={closeMenu}>Contact</Link>
            <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
            <Link to="/" className="btn wide" onClick={closeMenu}>
              View Pricing
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
