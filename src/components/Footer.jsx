import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>TopFrancais</h3>
          <p>Learn French the smart and fast way.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: support@topfrancais.com</p>
          <p>Phone: +234 800 123 4567</p>
        </div>

        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TopFrancais. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
