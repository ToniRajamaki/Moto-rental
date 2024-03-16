import '../styles/Navbar.css';
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav >
      <div>

      <a href="/" className='nav-title'>
        <img className='nav-logo'  src="https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/Group%201.png?raw=true" alt="" />
      </a>
      </div>

      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a className='nav-item' href="/about">Home</a>
        </li>
        <li>
          <a className='nav-item' href="/about">About</a>
        </li>
        <li>
          <a className='nav-item' href="/about">Vehicles</a>
        </li>
        <li>
          <a  className='nav-item'href="/services">Testimonials</a>
        </li>
        <li>
          <a  className='nav-item'href="/contact">Our Team</a>
        </li>
        <li>
          <a  className='nav-item'href="/contact">Contact</a>
        </li>

      </ul>
      <div className="nav-buttons">
        <button className="btn button-primary">Log In</button>
        <button className="btn button-secondary">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
