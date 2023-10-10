import React, { useEffect } from 'react';
import '../css/style.css'; 
import heroBanner from '../img/hero-banner.png'
import heroShape from '../img/hero-shape.svg'

const Hero = () => {
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
    <section className="section hero" aria-label="home">
      <div className="container">
        <figure className="hero-banner">
          <img
            src={heroBanner}
            width="560"
            height="540"
            alt="Feylicks"
            className="w-100"
            data-reveal="top"
          />
          <img
            src={heroShape}
            width="203"
            height="91"
            alt="250+ Projects Done"
            className="shape"
            data-reveal="top"
            data-reveal-delay="0.25s"
          />
        </figure>

        <div className="hero-content">
          <h1 className="h1 hero-title" data-reveal="top" data-reveal-delay="0.5s">
            I'm User Interface Designer & Developer.
          </h1>
          <p className="section-text" data-reveal="top" data-reveal-delay="0.75s">
            Hello! I'm Feylicks, a freelance user interface designer & developer based in London. I’m very passionate
            about the work that I do.
          </p>
          <div className="btn-wrapper" data-reveal="top" data-reveal-delay="1s">
            <a href="#" className="btn btn-primary">
              See My Works
            </a>
            <a href="#" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
