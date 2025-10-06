// src/components/Popup.jsx
import { useState, useEffect } from "react";
import "/src/components/Popup.scss";

export default function Popup({
  delay = 10000,
  title = "Get Ready to Learn French!",
  description = "Join our newsletter and get started with Topfrançais!",
  buttonText = "Signup with Topfrançais",
  buttonLink = null,
  isForm = true, // whether to show form or a link button
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const closePopup = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="popup__backdrop" onClick={closePopup}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={closePopup}>×</button>

        <h2>{title}</h2>
        <p>{description}</p>

        {isForm ? (
          <form className="popup__form">
            <input type="text" placeholder="First name" required />
            <input type="text" placeholder="Last name" required />
            <input type="text" placeholder="Country" required />
            <button type="submit" className="btn">{buttonText}</button>
          </form>
        ) : (
          <a
            href={buttonLink}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
        )}

        {isForm && (
          <p className="popup__footer">
            Already a student? <a href="/login">Login</a>
          </p>
        )}
      </div>
    </div>
  );
}
