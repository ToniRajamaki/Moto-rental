import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="header" id="#home">
      <nav className="nav container">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home">
                <img className="nav__logo" src="https://github.com/ToniRajamaki/folio2/blob/main/public/assets/toni/logo.png?raw=true" alt="Logo" />
              </a>
            </li>
            <li className="nav__item">
              <a href="#home" className="nav__link">Home</a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">About</a>
            </li>
            <li className="nav__item">
              <a href="#education" className="nav__link">Vehicles</a>
            </li>
            <li className="nav__item">
              <a href="#qualification" className="nav__link">Testimonials</a>
            </li>
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">Our Team</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">Contact</a>
            </li>
          </ul>
          {/* Removed dynamic JavaScript behavior for toggling menu and class changes */}
        </div>
        {/* Removed the toggle button functionality as it requires JavaScript */}
      </nav>
    </header>
  );
};

export default Navbar;
