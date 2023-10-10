import React, { useEffect } from 'react';
import '../css/style.css';
import project1 from '../img/project-1.png'
import project2 from '../img/project-2.png'
import project3 from '../img/project-3.png'
import project4 from '../img/project-4.png'

import { AiOutlineForward } from 'react-icons/ai';


const ProjectSection = () => {
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
    <section className="section project" aria-labelledby="project-label">
      <div className="container">
        <div className="title-wrapper" data-reveal="top">
          <div>
            <h2 className="h2 section-title" id="project-label">
              Latest Projects
            </h2>
            <p className="section-text">
              Check out some of my latest projects with creative ideas.
            </p>
          </div>
          <a href="#" className="btn btn-secondary">
            See All Projects
          </a>
        </div>
        <ul className="grid-list">
          <li>
            <div className="project-card project-card-1" style={{ backgroundColor: '#f8f5fb' }}>
              <div className="card-content" data-reveal="left">
                <p className="card-tag" style={{ color: '#a07cc5' }}>
                  Web Design
                </p>
                <h3 className="h3 card-title">Snowlake Theme</h3>
                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                  porta felis euismod semper. Fusce dapibus tellus cursus.
                </p>
                <a href="#" className="btn-text" style={{ color: '#a07cc5' }}>
                  <span className="span">See Project</span>
                  <AiOutlineForward/>
                </a>
              </div>
              <figure className="card-banner" data-reveal="right">
                <img
                  src={project1}
                  width="650"
                  height="370"
                  loading="lazy"
                  alt="Web Design"
                  className="w-100"
                />
              </figure>
            </div>
          </li>
          <li>
            <div className="project-card project-card-2" style={{ backgroundColor: '#f1f5fd' }}>
              <div className="card-content" data-reveal="right">
                <p className=" card-tag" style={{ color: '#3f78e0' }}>
                  Mobile Design
                </p>
                <h3 className="h3 card-title">Budget App</h3>
                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                  porta felis euismod semper. Fusce dapibus tellus cursus.
                </p>
                <a href="#" className="btn-text" style={{ color: '#3f78e0' }}>
                  <span className="span">See Project</span>
                  <AiOutlineForward/>
                </a>
              </div>
              <figure className="card-banner" data-reveal="left">
                <img
                  src={project2}
                  width="600"
                  height="367"
                  loading="lazy"
                  alt="Web Design"
                  className="w-100"
                />
              </figure>
            </div>
          </li>
          <li>
            <div className="project-card project-card-3" style={{ backgroundColor: '#f5faf7' }}>
              <div className="card-content" data-reveal="left">
                <p className=" card-tag" style={{ color: '#7cb798' }}>
                  Web Design
                </p>
                <h3 className="h3 card-title">Missio Theme</h3>
                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis. Scelerisque
                  id ligula felis.
                </p>
                <a href="#" className="btn-text" style={{ color: '#7cb798' }}>
                  <span className="span">See Project</span>
                  <AiOutlineForward/>
                </a>
              </div>
              <figure className="card-banner" data-reveal="right">
                <img
                  src={project3}
                  width="600"
                  height="367"
                  loading="lazy"
                  alt="Web Design"
                  className="w-100"
                />
              </figure>
            </div>
          </li>
          <li>
            <div className="project-card project-card-4" style={{ backgroundColor: '#fcf4f6' }}>
              <div className="card-content" data-reveal="left">
                <p className=" card-tag" style={{ color: '#d16b86' }}>
                  Mobile Design
                </p>
                <h3 className="h3 card-title">Storage App</h3>
                <p className="card-text">
                  Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                  porta felis euismod semper.
                </p>
                <a href="#" className="btn-text" style={{ color: '#d16b86' }}>
                  <span className="span">See Project</span>
                  <AiOutlineForward/>
                </a>
              </div>
              <figure className="card-banner" data-reveal="right">
                <img
                  src={project4}
                  width="620"
                  height="370"
                  loading="lazy"
                  alt="Mobile Design"
                  className="w-100"
                />
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
