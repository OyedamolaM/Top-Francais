import "./WhyChoose.scss";

export default function WhyChoose() {
  const features = [
    {
      title: "Comprehensive French Programs",
      desc: "Structured learning paths designed to take you from beginner to fluent speaker.",
      icon: "📖",
    },
    {
      title: "Personalized Tutoring",
      desc: "Get individual attention and customized lessons from experienced tutors.",
      icon: "👩‍🏫",
    },
    {
      title: "Flexible Scheduling",
      desc: "Study at your convenience with morning, afternoon, or evening class options.",
      icon: "⏰",
    },
    {
      title: "Vibrant French Community",
      desc: "Practice and grow with a supportive network of fellow learners and native speakers.",
      icon: "🤝",
    },
    {
      title: "Live Interactive Classes",
      desc: "Engage directly with native tutors in real-time — no boring pre-recorded lessons.",
      icon: "🎥",
    },
    {
      title: "Money-Back Guarantee",
      desc: "If you're not satisfied within 3 months, we’ll refund you completely — no risk learning.",
      icon: "💰",
    },
    {
      title: "Exam Preparation",
      desc: "Master TEF, TCF, and DELF exams with expert-guided practice, strategies and resources.",
      icon: "📚",
    },
  ];

  return (
    <section className="why-choose" id="why-choose">
      <div className="why-choose__container">
        <h2 className="why-choose__title">Why Choose Topfrançais?</h2>
        <p className="why-choose__subtitle">
          At Topfrançais, we empower learners to achieve fluency in French through
          innovative, personalized, and flexible teaching methods.
        </p>

        <div className="why-choose__grid">
          {features.map((f, index) => (
            <div key={index} className="why-choose__card">
              <div className="why-choose__icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <button className="btn why-choose__cta">Join Topfrançais Today</button>
      </div>
    </section>
  );
}
