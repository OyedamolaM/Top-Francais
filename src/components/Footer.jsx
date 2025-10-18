import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h3>TopFrançais</h3>
          <p>Learn French the smart and fast way.</p>
        </div>

        {/* Community Links */}
        <div className="footer-links">
          <h4>Community</h4>
          <ul>
            <li><a href="#community">Join Our French Community</a></li>
            <li><a href="#social-classroom">Social Media Classroom</a></li>
            <li><a href="#videos">Latest Classroom Videos</a></li>
            <li><a href="http://Instagram.com/topfrancais_" target="_blank" rel="noreferrer noopener">Instagram</a></li>
            <li><a href="http://youtube.com/@topfrancaisacademy" target="_blank" rel="noreferrer noopener">YouTube</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-links">
          <h4>Resources</h4>
          <ul>
            <li><a href="#blog">Topfrançais Blog</a></li>
            <li><a href="#verbs">1000 Verbs PDF</a></li>
            <li><a href="#exams">Exam Preparation (TCF/TEF, DELF/DAF)</a></li>
            <li><a href="#podcast">Daily Podcast</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><strong>Email:</strong> admin@topfrancaisacademy.com</p>
          <p><strong>WhatsApp:</strong> +234 705 121 0568</p>
          <p><strong>France Office:</strong> Paris, France</p>
          <p><strong>UK Office:</strong> London, UK</p>
          <p><a href="#partners">Partner with Us</a></p>
          <p><a href="#outreach">Our Outreaches</a></p>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="icons">
            <a
              href="https://instagram.com/topfrancais_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              href="https://www.youtube.com/@topfrancaisacademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>

            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a
              href="https://www.tiktok.com/@topfrancais"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-tiktok" aria-hidden="true"></i>
            </a>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TopFrançais. All rights reserved.</p>
        <p>Registration Number: TOP FRANÇAIS DES ÉTUDIANTS LIMITED</p>

        {/* Login Bar */}
        <div className="footer-login">
          <input type="text" placeholder="Enter Classroom ID" />
          <button>Login</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
