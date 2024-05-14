import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import '../App.css';

const Portfolio = () => {
    const applications = [
        {
            title: 'Weather Dashboard',
            imageUrl: '/weather-dashboard.png',
            deployedUrl: 'https://heeyitsrissa.github.io/weather-dashboard/',
            githubUrl: 'https://github.com/heeyitsrissa/weather-dashboard.git'
        },
        {
            title: 'Task Trek',
            imageUrl: '/task-trek.png',
            deployedUrl: 'https://hidden-journey-96158-4da61c9985e7.herokuapp.com/',
            githubUrl: 'https://github.com/heeyitsrissa/task-trek.git'
        },
        {
            title: 'Note Taker',
            imageUrl: '/note-taker.png',
            deployedUrl: 'https://rocky-citadel-01727-733a1801a99f.herokuapp.com/notes',
            githubUrl: 'https://github.com/heeyitsrissa/Note-Taker.git'
        },
        {
            title: 'Art History',
            imageUrl: '/art-history.png',
            deployedUrl: 'https://heeyitsrissa.github.io/art-history/',
            githubUrl: 'https://github.com/heeyitsrissa/art-history.git'
        },
        {
            title: 'Password Generator',
            imageUrl: '/password-generator.png',
            deployedUrl: 'https://heeyitsrissa.github.io/random-password-generator/',
            githubUrl: 'https://github.com/heeyitsrissa/random-password-generator.git'
        },
        {
            title: 'Daily Planner',
            imageUrl: '/daily-planner.png',
            deployedUrl: 'https://heeyitsrissa.github.io/daily-planner/',
            githubUrl: 'https://github.com/heeyitsrissa/daily-planner.git'
        }
    ];

    return (
        <div className="portfolio-page">
            <h2>My Applications</h2>
            <div className="application-grid">
                {applications.map((app, index) => (
                    <PortfolioCard
                        key={index}
                        title={app.title}
                        imageUrl={app.imageUrl}
                        deployedUrl={app.deployedUrl}
                        githubUrl={app.githubUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
