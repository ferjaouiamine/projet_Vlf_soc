import React, { useEffect, useState } from 'react';
import './Cssfile/Navbar.css';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollCurrent = window.scrollY;
      const scrollPercent = (scrollCurrent / scrollTotal) * 100;

      setScrollProgress(scrollPercent);

      if (scrollCurrent > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="vlf-button">VLF</button>
        </div>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#project">Le projet</a></li>
          <li><a href="#actions">Actions</a></li>
          <li><a href="#stories">Histoires de Réussite</a></li>
          <li><a href="#partners">Partenaires</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
