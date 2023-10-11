import React, { useEffect } from 'react';
import '../css/style.css';
import icon1 from '../img/icon-1.svg'
import icon2 from '../img/icon-2.svg'
import icon3 from '../img/icon-3.svg'
import icon4 from '../img/icon-4.svg'

const AboutSection = () => {
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
    <section className="section about" aria-label="about">
      <div className="container">
        <div className="wrapper">
          <div data-reveal="left">
            <h2 className="h2 section-title">What I Do?</h2>
            <p className="section-text">
            As a user interface designer and developer, 
            I create visually appealing and user-friendly digital interfaces,
             combining design and code to craft interactive, 
            intuitive, and engaging experiences for websites and applications.
            </p>
          </div>

          <ul className="progress-list" data-reveal="right">
            <li className="progress-item">
              <div className="label-wrapper">
                <p>Web Design</p>
                <span className="span">100 %</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '100%', backgroundColor: '#c7b1dd' }}></div>
              </div>
            </li>
            <li className="progress-item">
              <div className="label-wrapper">
                <p>Mobile Design</p>
                <span className="span">80 %</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '80%', backgroundColor: '#8caeec' }}></div>
              </div>
            </li>
            <li className="progress-item">
              <div className="label-wrapper">
                <p>Development</p>
                <span className="span">85 %</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '85%', backgroundColor: '#b0d4c1' }}></div>
              </div>
            </li>
            <li className="progress-item">
              <div className="label-wrapper">
                <p>SEO</p>
                <span className="span">90 %</span>
              </div>
              <div className="progress">
                <div className="progress-fill" style={{ width: '90%', backgroundColor: '#e3a6b6' }}></div>
              </div>
            </li>
          </ul>
        </div>

        <ul className="grid-list">
          <li data-reveal="bottom">
            <div className="about-card">
              <div className="card-icon">
                <img src={icon1} width="52" height="52" loading="lazy" alt="web design icon" />
              </div>
              <h3 className="h4 card-title">Web Design</h3>
              <p className="card-text">
              Web design is about crafting visually appealing, 
              user-friendly websites, optimizing layout, typography, 
              and graphics to create a compelling online presence.
              </p>
            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.25s">
            <div className="about-card">
              <div className="card-icon">
                <img src={icon2} width="52" height="52" loading="lazy" alt="mobile design icon" />
              </div>
              <h3 className="h4 card-title">Mobile Design</h3>
              <p className="card-text">
              Mobile design focuses on creating responsive, user-friendly interfaces for smartphones and tablets, 
              prioritizing touch-friendly navigation and optimizing content for small screens.
              </p>
            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.5s">
            <div className="about-card">
              <div className="card-icon">
                <img src={icon3} width="52" height="52" loading="lazy" alt="web development icon" />
              </div>
              <h3 className="h4 card-title">Development</h3>
              <p className="card-text">
               Development encompasses coding, testing, and maintaining software and applications to ensure functionality, performance,
               and user satisfaction in various technological domains.
              </p>
            </div>
          </li>

          <li data-reveal="bottom" data-reveal-delay="0.75s">
            <div className="about-card">
              <div className="card-icon">
                <img src={icon4} width="52" height="52" loading="lazy" alt="web seo icon" />
              </div>
              <h3 className="h4 card-title">SEO</h3>
              <p className="card-text">
                SEO (Search Engine Optimization) involves optimizing web content to rank higher in search engine results, 
                enhancing visibility and driving organic traffic to websites.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
