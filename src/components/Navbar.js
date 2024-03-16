import '../styles/Navbar.css';
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav >
      <a href="/">
        <img className='nav-logo'  src="https://raw.githubusercontent.com/ToniRajamaki/moto-rental/26ac057dbac091c9de1d1c2c0b374114d740da1d/public/images/low-poly-grid-haikei.svg" alt="" />
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a className='nav-item' href="/about">About</a>
        </li>
        <li>
          <a  className='nav-item'href="/services">Services</a>
        </li>
        <li>
          <a  className='nav-item'href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
