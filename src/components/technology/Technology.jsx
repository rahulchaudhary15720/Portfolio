import React from 'react';
import img1 from '../../assets/svg/css.svg';
import img2 from '../../assets/svg/expressjs.svg';
import img3 from '../../assets/svg/html.svg';
import img4 from '../../assets/svg/js.svg';
import img5 from '../../assets/svg/mongoDB.svg';
import img6 from '../../assets/svg/react.svg';
import img7 from '../../assets/svg/tailwind.svg';
import img8 from '../../assets/svg/SQL.svg';
import './technology.css';

const Technology = () => {
    const skills = [
        {
            name: 'HTML',
            icon: img3,
            level: 'Advanced',
            description: 'Markup Language',
            link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            category: 'frontend'
        },
        {
            name: 'CSS',
            icon: img1,
            level: 'Advanced',
            description: 'Styling Language',
            link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            category: 'frontend'
        },
        {
            name: 'Tailwind',
            icon: img7,
            level: 'Intermediate',
            description: 'Utility-First CSS',
            link: 'https://tailwindcss.com/',
            category: 'frontend'
        },
        {
            name: 'JavaScript',
            icon: img4,
            level: 'Intermediate',
            description: 'Programming Language',
            link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            category: 'frontend'
        },
        {
            name: 'React',
            icon: img6,
            level: 'Intermediate',
            description: 'Frontend Library',
            link: 'https://reactjs.org/',
            category: 'frontend'
        },
        {
            name: 'MongoDB',
            icon: img5,
            level: 'Intermediate',
            description: 'NoSQL Database',
            link: 'https://www.mongodb.com/',
            category: 'backend'
        },
        {
            name: 'Express',
            icon: img2,
            level: 'Intermediate',
            description: 'Web Framework',
            link: 'https://expressjs.com/',
            category: 'backend'
        },
        {
            name: 'SQL',
            icon: img8,
            level: 'Beginner',
            description: 'Database Query Language',
            link: 'https://www.w3schools.com/sql/',
            category: 'backend'
        }
    ];

    return (
        <section className="skills-section">
            <div className="skills-container">
                <div className="skills-header">
                    <h1 className="skills-title">Technical Expertise</h1>
                    <div className="skills-subtitle">
                        <span className="subtitle-line"></span>
                        <p>What I Bring to the Table</p>
                        <span className="subtitle-line"></span>
                    </div>
                </div>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className={`skill-card ${skill.category}`}>
                            <div className="card-gradient"></div>
                            <a 
                                href={skill.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="skill-content"
                            >
                                <div className="skill-icon-wrapper">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className="skill-icon"
                                    />
                                </div>
                                
                                <h2 className="skill-name">{skill.name}</h2>
                                
                                <span className={`skill-level ${skill.level.toLowerCase()}`}>
                                    {skill.level}
                                </span>
                                
                                <p className="skill-description">
                                    {skill.description}
                                </p>
                            </a>
                            <div className="card-accent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technology;