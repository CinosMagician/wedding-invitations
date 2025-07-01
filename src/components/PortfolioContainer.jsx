import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from '../footer';
import ContactForm from './ContactForm';
import Header from '../header';
import './PortfolioContainer.css';
import '../footer.css';

export default function PortfolioContainer() {
  const location = useLocation(); // Get the current location
  const [currentPage, setCurrentPage] = useState(location.pathname.substring(1));


  useEffect(() => {
    // Update localStorage when currentPage changes
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);

  return (
    <div id="root" style={{}}>
      <main className={`mx-3`}>
      </main>
    </div>
  );
}
