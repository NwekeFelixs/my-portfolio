import React, { useEffect } from 'react';
import '../css/style.css'; 
import {AiFillGithub, AiOutlineFacebook} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <p className="copyright">© 2022 Feylicks. All rights reserved.</p>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <AiFillTwitterCircle/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <AiFillGithub/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <AiFillLinkedin/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <AiOutlineFacebook/>
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <AiOutlineInstagram/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
