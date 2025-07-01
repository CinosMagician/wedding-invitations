import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './NavTabs.css'; // You can update the CSS later

const NavTabs = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get current location
  const location = useLocation();

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const isMobile = window.innerWidth <= 840;

  const navVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: isMobile ? 220 : 260, // Less stiffness on mobile
        damping: 20,
        duration: isMobile ? 0.2 : 0.3, // Shorter duration for mobile
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: isMobile ? 0.15 : 0.2, // Shorter exit on mobile
        ease: "easeIn",
      },
    },
  };
  

  // Function to check if the current route matches the given path
  const isActive = (path) => {
    if (location.pathname === '/' && path === '/projects') {
      return true; // Mark "Projects" active when on the home domain
    }
    return location.pathname === path;
  };

  return (
    <header className="header">
      <h1 className="logo">Lachlan Hughes</h1>
      <button className="menu-button" onClick={handleMenuToggle}>
        &#9776;
      </button>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/about"
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={isActive('/resume') ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
            >
              Hire Me!
            </Link>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="dropdown-menu"
            variants={navVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <ul className="dropdown-nav">
              <li className="nav-item">
                <Link
                  to="/about"
                  className={isActive('/about') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resume"
                  className={isActive('/resume') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me!
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavTabs;
