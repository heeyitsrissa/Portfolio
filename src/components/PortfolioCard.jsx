import React from 'react';
import '../App.css';

const PortfolioCard = ({ title, imageUrl, deployedUrl, githubUrl }) => {
    return (
        <div className="portfolio-card">
            <h3>{title}</h3>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={title} className="portfolio-image" />
            </a>
            <div className="links">
                {/* <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed Application</a> */}
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">Github Repository</a>
            </div>
        </div>
    );
};

export default PortfolioCard;
