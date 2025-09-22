import React from "react";
import "./PricingPlans.scss";

const Pricing = () => {
  const plans = [
    {
      title: "Starter",
      price: "$29",
      desc: "Perfect for beginners who want to start learning French.",
      features: ["Access to beginner lessons", "Community support", "Basic exercises"],
    },
    {
      title: "Pro",
      price: "$59",
      desc: "For learners who want structured lessons & more practice.",
      features: [
        "Everything in Starter",
        "Intermediate & advanced lessons",
        "Weekly group practice",
      ],
      highlight: true, // Highlight this plan
    },
    {
      title: "Premium",
      price: "$99",
      desc: "Best for serious learners aiming for fluency.",
      features: [
        "Everything in Pro",
        "1-on-1 coaching with tutor",
        "Exam preparation",
        "Priority support",
      ],
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <h2>Pricing Plans</h2>
      <p className="subtitle">Choose the plan that works best for you.</p>

      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.highlight ? "highlight" : ""}`}
          >
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}/mo</p>
            <p className="desc">{plan.desc}</p>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <button className="btn">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
