import '../styles/Navbar.css';
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav >
      <a href="/" className='nav-title'>
        <img className='nav-logo'  src="https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/moto-rental-logo.png?raw=true" alt="" />Moto Rental
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
