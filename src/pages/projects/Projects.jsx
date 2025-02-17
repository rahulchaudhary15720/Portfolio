import React, { useState, useEffect } from 'react';
import {
  CalendarIcon,
  GraduationCapIcon,
  BrainCircuitIcon,
  CloudIcon,
  ShoppingCartIcon,
  CircuitBoardIcon,
  BookOpenIcon,
  AwardIcon,
  ChevronDownIcon
} from 'lucide-react';
import './project.css'

const Projects = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  const certifications = [
    {
        id: 1,
        title: "Data Science",
        period: "January 2023 - March 2023",
        description: "Comprehensive training in data science fundamentals, including statistical analysis, machine learning, and data visualization techniques.",
        icon: <BrainCircuitIcon size={24} />,
        category: "Data Analytics",
        skills: ["Python", "Machine Learning", "Statistical Analysis", "Data Visualization"],
        progress: 100,
       
        certificationLink: "https://archive.nptel.ac.in/noc/B2C/candidate_login/main.php"
    },
    {
        id: 2,
        title: "Learning Analytics Tools",
        period: "July 2023 - October 2023",
        description: "Advanced study of learning analytics platforms, focusing on educational data mining and student performance prediction models.",
        icon: <GraduationCapIcon size={24} />,
        category: "Education Technology",
        skills: ["Educational Data Mining", "Learning Management Systems", "Student Analytics"],
        tools: ["R", "Tableau", "SQL", "MongoDB"],
        certificationLink: "https://example.com/cert/lat202"
    },
    {
        id: 3,
        title: "Cloud Computing",
        period: "January 2024 - April 2024",
        description: "Mastery of cloud infrastructure, deployment strategies, and scalable architecture design principles.",
        icon: <CloudIcon size={24} />,
        category: "Cloud Technology",
        skills: ["AWS", "Azure", "Cloud Architecture", "DevOps"],
        tools: ["AWS", "Docker", "Kubernetes", "Terraform"],
        certificationLink: "https://example.com/cert/cc303"
    },
    {
        id: 4,
        title: "Retail Marketing Strategy",
        period: "July 2024 - September 2024",
        description: "Strategic approach to retail marketing, including customer behavior analysis and digital transformation in retail.",
        icon: <ShoppingCartIcon size={24} />,
        category: "Marketing",
        skills: ["Market Analysis", "Digital Marketing", "Customer Journey Mapping"],
        tools: ["Google Analytics", "Shopify", "HubSpot", "Mailchimp"],
        certificationLink: "https://example.com/cert/rms404"
    },
    {
        id: 5,
        title: "Internet of Things (IoT)",
        period: "July 2024 - October 2024",
        description: "Comprehensive study of IoT ecosystems, sensor networks, and connected device architecture.",
        icon: <CircuitBoardIcon size={24} />,
        category: "IoT Technology",
        skills: ["Sensor Networks", "IoT Protocols", "Embedded Systems"],
        tools: ["Arduino", "Raspberry Pi", "MQTT", "Node-RED"],
        certificationLink: "https://example.com/cert/iot505"
    }
];


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.timeline-item').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-container">
      <h2 className="timeline-header">Professional Journey</h2>
      <p className="timeline-subheader">Tracking my growth through certifications and continuous learning</p>

      <div className="timeline">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            id={`timeline-${cert.id}`}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${
              isVisible[`timeline-${cert.id}`] ? 'visible' : ''
            }`}
          >
            <div className="timeline-content">
              <div className="timeline-icon">
                {cert.icon}
              </div>
              
              <div className="timeline-date">
                <CalendarIcon size={16} className="calendar-icon" />
                <span>{cert.period}</span>
              </div>

              <div className="timeline-details">
                <span className="timeline-category">{cert.category}</span>
                <h3 className="timeline-title">{cert.title}</h3>
                <p className="timeline-description">{cert.description}</p>
                
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${cert.progress}%` }}
                  />
                  <span className="progress-text">{cert.progress}% Complete</span>
                </div>

                <button 
                  className="expand-button"
                  onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                >
                  <span>Details</span>
                  <ChevronDownIcon 
                    size={20} 
                    className={`expand-icon ${expandedId === cert.id ? 'rotated' : ''}`}
                  />
                </button>

                {expandedId === cert.id && (
                  <div className="expanded-content">
                    <div className="detail-section">
                      <h4><BookOpenIcon size={16} /> Skills Acquired</h4>
                      <div className="skills-grid">
                        {cert.skills.map((skill, i) => (
                          <span key={i} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    {/* <div className="detail-section">
                      <h4><AwardIcon size={16} /> Projects & Achievements</h4>
                      <ul className="projects-list">
                        {cert.projects.map((project, i) => (
                          <li key={i}>{project}</li>
                        ))}
                      </ul>
                      <ul className="achievements-list">
                        {cert.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div> */}

                    <a 
                      href={cert.certificationLink}
                      className="cert-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Certification
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
