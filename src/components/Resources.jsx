// src/components/Resources.jsx
import React from "react";
import "./Resources.scss";

export default function Resources() {
  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2 className="section-title">Learning Resources</h2>
        <p className="subtitle">
          Boost your French learning with our free and premium study resources.
        </p>

        <div className="resources-grid">
          {/* Blog */}
          <div className="resource-card fade-up">
            <h3>Topfrançais Blog</h3>
            <p>
              Read expert tips, study hacks, and motivational articles to
              supercharge your French journey.
            </p>
            <a href="/blog" className="btn">Read Blog</a>
          </div>

          {/* 1000 Verbs PDF */}
          <div
            className="resource-card fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h3>1000 Verbs PDF</h3>
            <p>
              Download our comprehensive list of 1000 most important French verbs
              to practice daily.
            </p>
            <a href="/pdf/1000-verbs.pdf" className="btn" download>
              Download PDF
            </a>
          </div>

          {/* Exam Prep */}
          <div
            className="resource-card fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h3>Exam Preparation</h3>
            <p>
              Prepare effectively for <strong>TCF/TEF</strong> and{" "}
              <strong>DELF/DAF</strong> exams with structured materials and
              practice sets.
            </p>
            <a href="/exam-prep" className="btn">Start Preparation</a>
          </div>

          {/* Daily Podcast */}
          <div
            className="resource-card fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h3>Topfrançais Daily Podcast</h3>
            <p>
              Listen on-the-go! Daily French conversations, vocab drills, and
              listening practice.
            </p>
            <a href="/podcast" className="btn">Listen Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
