// src/components/ContactUs.jsx
import React from "react";
import "./ContactUs.scss";

export default function ContactUs() {
  const contactMethods = [
    {
      title: "Instagram",
      description:
        "Follow our updates, short reels, and daily French learning tips on Instagram.",
      link: "http://Instagram.com/topfrancais_",
      buttonText: "Visit Instagram",
      delay: "0s",
    },
    {
      title: "Email",
      description:
        "Have a question, partnership idea, or need support? Send us an email anytime.",
      link: "mailto:admin@topfrancaisacademy.com",
      buttonText: "Send Email",
      delay: "0.2s",
    },
    {
      title: "WhatsApp",
      description:
        "Chat with our team directly for quick responses and personal assistance.",
      link: "https://wa.me/2347051210568",
      buttonText: "Message on WhatsApp",
      delay: "0.4s",
    },
    {
      title: "Our Offices",
      description: (
        <>
          <p><strong>France:</strong> 20 Rue Troyon Sevres, 93316, France</p>
          <p><strong>UK:</strong> Rowlandson House 289-293 Ballards Lane. London, N12 8NP England</p>
        </>
      ),
      isAddress: true,
      delay: "0.6s",
    },
    {
      title: "Partner with Us",
      description:
        "Collaborate with Topfrançais to bring the French language closer to more learners around the world.",
      link: "/",
      buttonText: "Become a Partner",
      delay: "0.8s",
    },
    {
      title: "Our Outreaches",
      description: (
        <>
          Learn about our community programs like the{" "}
          <strong>National French Bee</strong> and other educational initiatives.
        </>
      ),
      link: "/",
      buttonText: "Learn More",
      delay: "1s",
    },
  ];

  return (
    <section className="contact-us" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="subtitle">
          We’d love to hear from you. Reach out through any of the following ways:
        </p>

        <div className="contact-grid">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="contact-card fade-up"
              style={{ animationDelay: method.delay }}
            >
              <h3>{method.title}</h3>
              <div className="contact-description">
                {typeof method.description === "string"
                  ? <p>{method.description}</p>
                  : method.description}
              </div>

              {method.link && (
        <a
          href={method.link}
          target={
            method.link.startsWith("http") || method.link.startsWith("mailto:")
              ? "_blank"
              : "_self"
          }
          rel="noopener noreferrer"
          className="btn"
        >
          {method.buttonText}
        </a>
)}




            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
