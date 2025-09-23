// src/components/Community.jsx
import React from "react";
import "./Community.scss";

export default function Community() {
  return (
    <section className="community" id="community">
      <div className="container">
        <h2 className="section-title">Join Our French Community</h2>
        <p className="subtitle">
          Connect, practice, and grow with fellow French learners worldwide.
        </p>

        <div className="community-grid">
          {/* Social Media Classroom */}
          <div className="community-card fade-up">
            <h3>Topfrançais Social Media Classroom</h3>
            <p>
              Access interactive lessons, discussions, and live sessions with
              our vibrant online classroom community.
            </p>
            <button className="btn">Join Classroom</button>
          </div>

          {/* Latest Videos */}
          <div className="community-card fade-up" style={{ animationDelay: "0.2s" }}>
            <h3>Latest Classroom Videos</h3>
            <p>Catch up on the latest learning sessions and student highlights.</p>
            <div className="video-preview">
              <iframe
                src="https://www.youtube.com/embed/sample"
                title="Latest Classroom Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Instagram */}
          <div className="community-card fade-up" style={{ animationDelay: "0.4s" }}>
            <h3>Instagram</h3>
            <p>Follow us for daily tips, stories, and learning challenges.</p>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn">
              Visit Instagram
            </a>
          </div>

          {/* YouTube */}
          <div className="community-card fade-up" style={{ animationDelay: "0.6s" }}>
            <h3>YouTube Channel</h3>
            <p>
              Explore full lessons, tutorials, and inspiring student journeys on
              our YouTube channel.
            </p>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="btn">
              Visit YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
