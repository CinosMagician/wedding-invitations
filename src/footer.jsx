import React from 'react';
import { Link } from 'react-router-dom';

import githubIcon from './assets/GitHub.svg';
import linkedinIcon from './assets/lin.svg';
import emailIcon from './assets/Email.svg';

const Footer = ({ handlePageChange }) => {
  return (
    <footer className="footer bg-purp">
        <div className='footer-buttons'>
            <a href='https://github.com/CinosMagician' className='footer-button'>
                <img src={githubIcon} alt='GitHub Button'/>
            </a>
            <button className="footer-button">
              <Link to="/contact"><img src={emailIcon} alt="Email Button" /></Link>
            </button>
            <a href='https://www.linkedin.com/in/lachlan-hughes-357180324' className='footer-button'>
                <img src={linkedinIcon} alt='Linkedin Button'/>
            </a>
        </div>
      <p>&copy; 2024 Lachlan Hughes.</p>
    </footer>
  );
};

export default Footer;
