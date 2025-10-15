import React from "react";
import "./CourseSubscriptionPricing.scss";

const CourseSubscriptionPricing = () => {
  const courses = [
    {
      title: "Our Learning Packages",
      description:
        "Master French from beginner to advanced with structured lessons and practice exercises.",
      plans: [
        { title: "Standard", features: ["Personal Accountability Coach","Bi-weekly Live Class","Speaking Community Access", "Assigned weekly speaking partner","100+ Free French Resources ", "Guaranteed Refund", "100+ Extra Learning materials"] },
        { title: "Pro", features: ["Everything in Standard", "Personal 1-on-1 sessions per week", "1000+ pdf and recorded resources", "Monthly coaching sessions with Lead Tutor", "Structured lessens for DELF, DALF, TEF, TCF"], highlight: true },
        { title: "Premium", features:["Everything in Pro", "Additional Coach for reading and speaking practice", "Exclusive access to Topfrancais Summer Bootcamp", "Monthly Coaching and Career Guide with the Lead Tutor"]  },
      ],
    },
    {
      title: "Specialized Courses",
      description: "Prepare for French exams with targeted learning paths.",
      plans: [
        { title: "TCF/TEF Prep", features: ["Practice exams", "Exam strategies", "Speaking & writing drills"] },
        { title: "DELF/DALF Prep", features: ["Advanced grammar focus", "Past papers", "Personalized feedback"] },
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
                  {/* <p className="price">{plan.price} */}
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
