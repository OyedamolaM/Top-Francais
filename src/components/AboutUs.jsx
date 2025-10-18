// src/components/AboutUs.jsx
import React from "react";
import "./AboutUs.scss";

export default function AboutUs() {
  return (
    <section className="about-us" id="about">
      <div className="container">

        {/* Hero Title */}
        <div className="about-us__hero fade-up">
          <h1>ABOUT US</h1>
          <p className="subtitle">
            Discover how Topfrançais empowers students to master the French language and achieve fluency.
          </p>
        </div>

        {/* Our Story */}
        <div className="about-us__card fade-up" style={{ animationDelay: "0.1s" }}>
          <h2>Our Story</h2>
          <p>
            Topfrançais is an online institution dedicated to teaching the French language, catering to individuals seeking mastery and those aiming to advance their studies or careers in French-speaking countries. <br />
          Our institution is committed to providing high-quality French language instruction, leveraging expert tutors, and utilizing innovative teaching methods.</p>   
          <p>Our success is a testament to our institution's effectiveness in providing personalized attention, tailored instruction, and a supportive learning environment.</p>
          <ul>
            <li><strong>Established:</strong> 2023</li>
            <li><strong>Lead Tutor:</strong> Mrs. Esther Williams</li>
            <li><strong>Students Empowered:</strong> 5,000+</li>
            <li><strong>Global Reach:</strong> Thousands reached via videos & podcasts</li>
          </ul>
        </div>

        {/* Our Impact */}
        <div className="about-us__card fade-up" style={{ animationDelay: "0.2s" }}>
          <h2>Our Impact</h2>
          <ul>
            <li><strong>Fluent French Speakers:</strong> Many students have become confident French speakers, able to communicate effectively in personal and professional settings.</li>
            <li><strong>Academic & Career Opportunities:</strong> Others have furthered their studies or secured work opportunities that require French language proficiency, expanding their career horizons and global connections.</li>
            <li><strong>Global Connections:</strong> Our alumni have leveraged their newfound language skills to connect with French-speaking communities worldwide, fostering cultural understanding, and promoting international collaboration.</li>
            <li><strong>Personal Growth:</strong> Our alumni have leveraged their newfound language skills to connect with French-speaking communities worldwide, fostering cultural understanding, and promoting international collaboration.</li>
          </ul>
        </div>

        {/* Our Students */}
        <div className="about-us__card about-us__students fade-up" style={{ animationDelay: "0.3s" }}>
          <h2>Our Students</h2>
          <div className="students__content">
            <p>
              At Topfrançais, we take pride in our students’ achievements. Our comprehensive French language programs are designed to help learners develop:
            </p>
            <ul>
              <li>
                <strong>Native-like Confidence:</strong> Our students gain the confidence to express themselves fluently and accurately <br />in French, just like native speakers. Through interactive lessons, <br />conversational practice, and real-life scenarios, our students develop the skills to communicate effectively in French.
              </li>
              <li>
                <strong>Vibrant French Community:</strong> We foster a vibrant French-speaking community where learners can connect, <br />practice, and learn from one another. Our community provides a supportive environment for students <br />to share their experiences, ask questions, and receive feedback from peers and tutors.
              </li>
            </ul>
          </div>
        </div>

        {/* Our Tutors */}
        <div className="about-us__card fade-up" style={{ animationDelay: "0.4s" }}>
          <h2>Our Tutors</h2>
          <p> Our team of tutors is comprised of experienced and qualified language instructors who are passionate about teaching French. Our tutors:</p>
          <ul>
            <li><strong>Experienced & Qualified:</strong> Our tutors hold advanced degrees in French language and literature,<br /> as well as specialized certifications in language instruction. <br />They have extensive experience teaching French to learners of all levels and backgrounds.</li>
            <li><strong>Personalized Attention:</strong> Our tutors provide personalized attention to each student, tailoring their instruction to meet individual needs and learning styles.<br /> They create a supportive and motivating learning environment that encourages students to reach their full potential.
</li>
          </ul>
        </div>

        {/* Exams & Quizzes */}
        <div className="about-us__card fade-up" style={{ animationDelay: "0.5s" }}>
          <h2>Exams & Quizzes</h2>
          <p>To help our students prepare for French language proficiency exams and assessments, we offer:</p>
          <ul>
            <li><strong>Mock Exams & Quizzes:</strong>  Our mock exams and quizzes simulate the actual test-taking experience, <br />helping students become familiar with the exam format, timing, and content.</li>
            <li><strong>Comprehensive Feedback:</strong> Our tutors provide detailed feedback on students' performance, highlighting areas of strength and weakness. <br /> This feedback enables students to focus their studying and improve their chances of success.</li>
            <li><strong>Exam Prep Strategies:</strong> Our tutors share effective exam preparation strategies, including time management techniques,<br /> question-answering strategies, and stress-reduction methods. These strategies help students feel more confident and prepared for their exams.
</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
