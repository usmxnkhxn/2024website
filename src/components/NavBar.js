import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-and-icons">
        <div className="logo">{"(uk)"}</div>
        <div className="icons">
          <a href="mailto:someone@example.com" className="icon">
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href="tel:+1234567890" className="icon">
            <i className="bi bi-telephone-fill"></i>
          </a>
          <a href="https://github.com" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" className="icon" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`navbar-list ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item"><a href="#about">About</a></li>
        <li className="navbar-item"><a href="#work">Work</a></li>
        <li className="navbar-item"><a href="#education">Education</a></li>
        <li className="navbar-item"><a href="#skills">Skills</a></li>
        <li className="navbar-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
