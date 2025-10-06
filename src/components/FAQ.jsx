import React, { useState } from "react";
import "./FAQ.scss";

const FAQ = () => {
  const faqs = [
    {
      question: "Can I learn French even if I’ve never spoken a word before?",
      answer:
        "Absolutely! Our lessons start from the very basics — pronunciation, greetings, and simple phrases — and build your confidence step by step.",
    },
    {
      question: "How soon will I be able to hold a simple conversation?",
      answer:
        "Most learners can greet others, introduce themselves, and ask basic questions within 3–4 weeks of consistent study with our guided lessons.",
    },
    {
      question: "Do I need to live in a French-speaking country to learn effectively?",
      answer:
        "Not at all. Our interactive exercises, audio resources, and practice sessions simulate real French environments — no travel required!",
    },
    {
      question: "What kind of support will I get during my learning journey?",
      answer:
        "You’ll have access to instructors, live feedback sessions, and a supportive learner community to help you stay motivated and accountable.",
    },
    {
      question: "Are your courses suitable for working professionals or students?",
      answer:
        "Yes! Our lessons are flexible and designed to fit into busy schedules. You can learn at your own pace, from anywhere, at any time.",
    },
    {
      question: "Will I learn grammar or just conversational skills?",
      answer:
        "Both. We focus on speaking fluently while teaching grammar in a simple, practical way — so you understand it naturally as you learn to communicate.",
    },
    {
      question: "Do you offer certificates after completing a course?",
      answer:
        "Yes, students receive an official Topfrançais certificate of completion once they finish their course and final assessment.",
    },
    {
      question: "What if I’m not satisfied with the program?",
      answer:
        "We offer a 14-day money-back guarantee. If you’re not happy with your progress, you can request a full refund — no questions asked.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <h2>Frequently Asked Questions</h2>
      <p className="subtitle">
        Find quick answers to the most common questions about learning French with us.
      </p>

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
