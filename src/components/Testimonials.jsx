import React, { useRef, useState, useEffect } from "react";
import "./Testimonials.scss";

const testimonials = [
  {
    id: 1,
    name: "Marie Dupont",
    role: "Beginner Learner",
    date: "March 15, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video:
      "https://res.cloudinary.com/dfouqwqgu/video/upload/v1760704315/VID_20250812_093820_911.mp4_szndh3.mp4",
  },
  {
    id: 2,
    name: "Chinecherem Amos",
    role: "Intermediate Learner",
    date: "April 10, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video:
      "https://res.cloudinary.com/dfouqwqgu/video/upload/v1760697821/copy_56D41D75-1164-45F9-8757-C1E464C5204D_k9uddu.mov",
  },
  {
    id: 3,
    name: "Juliet",
    role: "Business Professional",
    date: "May 2, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video:
      "https://res.cloudinary.com/dfouqwqgu/video/upload/v1760697067/Day_9_Julliet_Speaks_y8vm1w.mov",
  },
  {
    id: 4,
    name: "Lucas Hernandez",
    role: "Advanced Speaker",
    date: "May 20, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video:
      "https://res.cloudinary.com/dfouqwqgu/video/upload/v1760697774/Video_from_Topfran%C3%A7ais_Des_%C3%89tudiants_wmkpp8.mp4",
  },
  {
    id: 5,
    name: "Sophie Laurent",
    role: "Traveler & Enthusiast",
    date: "June 12, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video:
      "https://res.cloudinary.com/dfouqwqgu/video/upload/v1760694519/Video_from_Topfran%C3%A7ais_Des_%C3%89tudiants_xlo77t.mp4",
  },
  {
    id: 6,
    name: "Ahmed Musa",
    role: "French Language Student",
    date: "July 1, 2025",
    logo: "https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_fill,g_face/v1699999996/logo.png",
    video:
      "https://res.cloudinary.com/dfouqwqgu/video/upload/v1760704375/VID-20250812-WA0050_u0wqgw.mp4",
  },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Center scroll on selected card
  const scrollToCard = (index) => {
    const container = scrollRef.current;
    const cards = container?.querySelectorAll(".testimonial-card");
    const target = cards?.[index];
    if (!target) return;
    const left =
      target.offsetLeft - (container.clientWidth - target.offsetWidth) / 2;
    container.scrollTo({ left, behavior: "smooth" });
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    scrollToCard(index);
  };

  // ✅ Observe visibility of the whole section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.4 } // section must be ~40% visible to trigger
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Auto-scroll only when section visible and no video playing
  useEffect(() => {
    if (!isVisible || isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        scrollToCard(next);
        return next;
      });
    }, 20000);
    return () => clearInterval(interval);
  }, [isVisible, isPlaying]);

  // ✅ Track which card is centered when scrolling manually
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const cards = container.querySelectorAll(".testimonial-card");
    const handleScroll = () => {
      let closestIndex = 0;
      let minDistance = Infinity;
      cards.forEach((card, i) => {
        const distance = Math.abs(
          container.scrollLeft -
            (card.offsetLeft - (container.clientWidth - card.offsetWidth) / 2)
        );
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      });
      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handle video play/pause & pause all others when one plays
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const videos = container.querySelectorAll("video");

    const handlePlay = (e) => {
      setIsPlaying(true);
      videos.forEach((v) => {
        if (v !== e.target) v.pause();
      });
    };
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    videos.forEach((video) => {
      video.addEventListener("play", handlePlay);
      video.addEventListener("pause", handlePause);
      video.addEventListener("ended", handleEnded);
    });

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("play", handlePlay);
        video.removeEventListener("pause", handlePause);
        video.removeEventListener("ended", handleEnded);
      });
    };
  }, []);

  return (
    <section className="testimonials" ref={sectionRef}>
      <h2>What Our Students Say</h2>
      <p className="subtitle">
        Hear real feedback from our learners across the world 🌍
      </p>

      <div className="testimonials-wrapper">
        <div className="testimonial-cards" ref={scrollRef}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <div className="video-wrapper">
                <video src={t.video} controls preload="metadata" playsInline />
                <div className="blue-overlay"></div>
                <div className="overlay">
                  <img src={t.logo} alt={t.name} className="logo-overlay" />
                  <span className="overlay-text">{t.name.split(" ")[0]}</span>
                </div>
              </div>
              <div className="testimonial-info">
                <h4>{t.name}</h4>
                <span className="role">{t.role}</span>
                <span className="date">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
