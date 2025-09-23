import React from "react";
import "./CourseSubscriptionPricing.scss";

const CourseSubscriptionPricing = () => {
  const courses = [
    {
      title: "Complete French Course",
      description:
        "Master French from beginner to advanced with structured lessons and practice exercises.",
      plans: [
        { title: "Starter", price: "$29", features: ["Beginner lessons", "Community support", "Basic exercises"] },
        { title: "Pro", price: "$59", features: ["Everything in Starter", "Intermediate & advanced lessons", "Weekly group practice"], highlight: true },
        { title: "Premium", price: "$99", features: ["Everything in Pro", "1-on-1 coaching with tutor", "Exam preparation", "Priority support"] },
      ],
    },
    {
      title: "Subscription Packages",
      description: "Flexible options for group or private classes.",
      plans: [
        { title: "Group Classes", price: "From $39/mo", features: ["1, 3, 6, 12 month plans", "Interactive group sessions", "Speaking challenges"] },
        { title: "Private Classes", price: "From $79/mo", features: ["1–5 days per week", "Personalized schedule", "1-on-1 guidance"] },
      ],
    },
    {
      title: "Specialized Courses",
      description: "Prepare for French exams with targeted learning paths.",
      plans: [
        { title: "TCF/TEF Prep", price: "$149", features: ["Practice exams", "Exam strategies", "Speaking & writing drills"] },
        { title: "DELF/DALF Prep", price: "$179", features: ["Advanced grammar focus", "Past papers", "Personalized feedback"] },
      ],
    },
  ];

  return (
    <section className="courses-pricing" id="courses-pricing">
      <h2>Courses & Subscription Plans</h2>
      <p className="subtitle">Choose the right course and plan for your French journey.</p>

      <div className="course-cards">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="course-card fade-up"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <h3>{course.title}</h3>
            <p>{course.description}</p>

            <div className="plans">
              {course.plans.map((plan, i) => (
                <div
                  key={i}
                  className={`plan-card ${plan.highlight ? "highlight" : ""}`}
                >
                  <h4>{plan.title}</h4>
                  <p className="price">{plan.price}</p>
                  <ul>
                    {plan.features.map((f, j) => (
                      <li key={j}>{f}</li>
                    ))}
                  </ul>
                  <button className="btn">Get Started</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSubscriptionPricing;
