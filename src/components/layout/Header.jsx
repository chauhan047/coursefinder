import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../../styles/Header.scss';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>KC OVERSEAS</h1>
            <p>EDUCATION</p>
          </div>
          
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
          
          <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#study">Study Destinations</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#counseling">Counseling</a></li>
              <li><a href="#events">Upcoming Events</a></li>
            </ul>
            <button className="contact-finder">Contact Finder</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 