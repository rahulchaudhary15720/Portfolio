import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import img from '../../assets/Images/CarRental.png';
import "./topProject.css";

const TopProject = () => {
  const [isHovered, setIsHovered] = useState(false);

  const projectDetails = {
    title: "Car Rental Platform",
    description: "A modern car rental platform built with React and Node.js, featuring real-time availability, seamless booking process, and secure payment integration.",
    liveLink: "https://car-rental-rust-mu.vercel.app/",
    githubLink: "https://github.com/yourusername/car-rental",
    features: [
      {
        title: "Smart Booking System",
        description: "Intuitive booking interface with real-time availability"
      },
      {
        title: "Secure Payments",
        description: "Integrated payment gateway with multiple payment options"
      },
      {
        title: "Location Services",
        description: "GPS-enabled pickup and drop-off location selection"
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock customer service with live chat"
      }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "AWS"]
  };

  return (
    <motion.div 
      className="project-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="project-content">
        <div className="project-header">
          <motion.h2 
            className="project-title"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {projectDetails.title}
          </motion.h2>
          <div className="project-links">
            <a href={projectDetails.githubLink} target="_blank" rel="noopener noreferrer" className="icon-link">
              <FiGithub size={24} />
            </a>
            <a href={projectDetails.liveLink} target="_blank" rel="noopener noreferrer" className="icon-link">
              <FiExternalLink size={24} />
            </a>
          </div>
        </div>

        <motion.p 
          className="project-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {projectDetails.description}
        </motion.p>

        <div className="project-features">
          {projectDetails.features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tech-stack"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3>Technologies Used</h3>
          <div className="tech-tags">
            {projectDetails.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>
      </div>

      <div 
        className="project-image-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="image-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src={img} 
            alt="Car Rental Platform" 
            className={`project-image ${isHovered ? 'hovered' : ''}`}
          />
          {isHovered && (
            <motion.div 
              className="image-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <a 
                href={projectDetails.liveLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="view-project-btn"
              >
                View Live Project <FiArrowRight className="arrow-icon" />
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopProject;