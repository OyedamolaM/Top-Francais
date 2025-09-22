import React, { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to start speaking French?",
      answer:
        "Most of our students can introduce themselves and hold simple conversations within the first month of consistent learning.",
    },
    {
      question: "Do I need any prior knowledge of French?",
      answer:
        "Not at all! Our Starter plan is designed for complete beginners and builds up gradually.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can upgrade at any time to access more lessons, group sessions, and 1-on-1 coaching.",
    },
    {
      question: "Is there a money-back guarantee?",
      answer:
        "Absolutely. If you’re not satisfied within the first 14 days, we’ll refund your payment in full.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <p className="subtitle">Have questions? We’ve got answers.</p>

      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h4>{faq.question}</h4>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
