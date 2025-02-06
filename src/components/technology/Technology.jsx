import img1 from '../../assets/svg/css.svg'
import img2 from '../../assets/svg/expressjs.svg'
import img3 from '../../assets/svg/html.svg'
import img4 from '../../assets/svg/js.svg'
import img5 from '../../assets/svg/mongoDB.svg'
import img6 from '../../assets/svg/react.svg'
import img7 from '../../assets/svg/tailwind.svg'
import img8 from '../../assets/svg/SQL.svg'
import React from 'react';


import './technology.css'

const skills = [
    { 
        name: 'HTML', 
        icon: img3, 
        level: 'Advanced', 
        description: 'Markup Language', 
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' 
    },
    { 
        name: 'CSS', 
        icon: img1, 
        level: 'Advanced', 
        description: 'Styling Language', 
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' 
    },
    { 
        name: 'Tailwind', 
        icon: img7, 
        level: 'Intermediate', 
        description: 'Utility-First CSS', 
        link: 'https://tailwindcss.com/' 
    },
    { 
        name: 'JavaScript', 
        icon: img4, 
        level: 'Advanced', 
        description: 'Programming Language', 
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' 
    },
    { 
        name: 'React', 
        icon: img6, 
        level: 'Intermediate', 
        description: 'Frontend Library', 
        link: 'https://reactjs.org/' 
    }, 
    { 
        name: 'MongoDB', 
        icon: img5, 
        level: 'Intermediate', 
        description: 'NoSQL Database', 
        link: 'https://www.mongodb.com/' 
    },
    { 
        name: 'Express', 
        icon: img2, 
        level: 'Intermediate', 
        description: 'Web Framework', 
        link: 'https://expressjs.com/' 
    },
    { 
        name: 'SQL', 
        icon: img8, 
        level: 'Beginner', 
        description: 'Database Query Language', 
        link: 'https://www.w3schools.com/sql/' 
    },
];


const Technology = () => {
    return (
        <section id="Skills">
            <div className="text-container">
                <h1>My Skills</h1>
                <p>----- What I Know -----</p>
            </div>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-card">
                        <div className="skill-icon" aria-label={`${skill.name} icon`}>
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                <img src={skill.icon} alt={skill.name} loading="lazy" />
                            </a>
                        </div>
                        <h1 className="skill-name">
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">{skill.name}</a>
                        </h1>
                        <p className="skill-level">{skill.level}</p>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Technology;
