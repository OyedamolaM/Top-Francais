import "./Features.scss";

export default function Features() {
  const features = [
    {
      title: "Live Classes",
      desc: "Interactive lessons with native French tutors, not just pre-recorded videos.",
      icon: "🎥",
    },
    {
      title: "Flexible Schedule",
      desc: "Choose class times that fit your lifestyle, whether morning, afternoon, or evening.",
      icon: "⏰",
    },
    {
      title: "Money-Back Guarantee",
      desc: "Not satisfied within 30 days? Get a full refund. No risk learning.",
      icon: "💰",
    },
    {
      title: "Exam Preparation",
      desc: "Tailored lessons for TEF, TCF, DELF exams with proven success strategies.",
      icon: "📚",
    },
  ];

  return (
    <section className="features">
      <h2 className="features__title">Why Choose TopFrancais?</h2>
      <div className="features__grid">
        {features.map((f, index) => (
          <div key={index} className="feature-card">
            <div className="feature-card__icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
