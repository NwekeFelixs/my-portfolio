import React, { useEffect, useState } from 'react';
import '../css/style.css'; 
import {AiFillGithub, AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import logoDark from '../img/logo-dark.png'
import logoLight from '../img/logo-light.png'

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('active');
      } else {
        document.querySelector('.header').classList.remove('active');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

  useEffect(() => {
    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('load', reveal);
    };
  }, []);

  return (
    <header className={`header ${isMobileMenuOpen ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logoLight} width="64" height="24" alt="Feylicks home" />
        </a>

        <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`} data-navbar>
          <div className="navbar-top">
            <a href="#" className="logo">
              <img src={logoDark} width="64" height="24" alt="Feylicks home" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" onClick={toggleMobileMenu}>
              <AiOutlineClose/>
            </button>
          </div>

          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">Home</a>
            </li>
            <li>
              <a href="#" className="navbar-link">About</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Projects</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Blog</a>
            </li>
            <li>
              <a href="#" className="navbar-link">Contact</a>
            </li>
          </ul>

          <div className="wrapper">
            <a href="mailto:FelixOnyekwere5@gmail.com" className="contact-link">FelixOnyekwere5@gmail.com</a>
            <a href="tel:07036875151" className="contact-link">+234 703 687 5151</a>
          </div>

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
                <AiOutlineInstagram/>
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <AiOutlineFacebook/>
              </a>
            </li>
          </ul>
        </nav>

        <button className="nav-open-btn" aria-label="open menu" onClick={toggleMobileMenu}>
          <AiOutlineMenu/>
        </button>

        {isMobileMenuOpen && (
          <div className="overlay" data-overlay onClick={toggleMobileMenu}></div>
        )}
      </div>
    </header>
  );
};

export default Header;
