import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://github.com/heeyitsrissa" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://linkedin.com/in/heeyitsrissa" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
