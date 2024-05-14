import React from 'react';
import '../App.css'

const Resume = () => {
    const proficiencies = [
        'JavaScript',
        'React',
        'MongoDb',
        'SQL',
        'Git & Github',
        'Heroku',

    ]

    return (
        <div className="resume-section">
            <h2>Resume</h2>
           
            <p>
            You can dowload my resume by clicking the link below:
            </p>
            <a href="/resume.pdf" download>
                Download Resume
            </a>

            <h3>Proficiencies</h3>
            <ul>
                {proficiencies.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default Resume;