import React, { useEffect } from 'react';
import '../css/style.css';
import contactIcon from '../img/icon-5.svg'; 

const ContactSection = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('[data-reveal]');
    const revealDelayElements = document.querySelectorAll('[data-reveal-delay]');

    const reveal = () => {
      for (let i = 0; i < revealElements.length; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
          revealElements[i].classList.add('revealed');
        }
      }
    };

    for (let i = 0; i < revealDelayElements.length; i++) {
      revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
    }

    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', reveal);
    };
  }, []);

  return (
    <section className="section contact" aria-label="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-content" data-reveal="left">
            <div className="card-icon">
              <img
                src={contactIcon}
                width="44"
                height="44"
                loading="lazy"
                alt="envelop icon"
              />
            </div>
            <h2 className="h2 section-title">
              If you like what you see, let's work together.
            </h2>
            <p className="section-text">
              I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form, and I will get back to you shortly.
            </p>
          </div>
          <form action="" className="contact-form" data-reveal="right">
            <div className="input-wrapper">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                required
                className="input-field"
              />
              <input
                type="email"
                name="email_address"
                placeholder="Email *"
                required
                className="input-field"
              />
            </div>
            <textarea
              name="message"
              placeholder="Message *"
              required
              className="input-field"
            ></textarea>
            <button type="submit" className="btn btn-secondary">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
