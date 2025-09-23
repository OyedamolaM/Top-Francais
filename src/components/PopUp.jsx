// src/components/Popup.jsx
import { useState, useEffect } from "react";
import "./Popup.scss"

export default function Popup({ delay =10000 }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const closePopup = () => setIsOpen(false);

  if (!isOpen) return null;

  return (
    <div className="popup__backdrop" onClick={closePopup}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="popup__close" onClick={closePopup}>×</button>
        
        <h2>Get Ready to Learn French!</h2>
        <p>Join our newsletter and get started with Topfrançais!</p>

        <form className="popup__form">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Last name" required />
          <input type="text" placeholder="Country" required />

          <button type="submit" className="btn">Signup with Topfrançais</button>
        </form>

        <p className="popup__footer">
          Already a student? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}
