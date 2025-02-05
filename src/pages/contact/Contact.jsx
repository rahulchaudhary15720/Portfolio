import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // Contact information object for easy maintenance
  const contactInfo = {
    phone: "75687936xx",
    email: "rahulchaudhary1572002@gmail.com",
    linkedin: "https://www.linkedin.com/in/rahul-choudhary-5b0152260/",
    github: "https://github.com/rahulchaudhary15720"
  };

  // Function to handle clicking on contact methods
  const handleContactClick = (type) => {
    switch (type) {
      case 'phone':
        window.location.href = `tel:${contactInfo.phone}`;
        break;
      case 'email':
        window.location.href = `mailto:${contactInfo.email}`;
        break;
      case 'linkedin':
        window.open(contactInfo.linkedin, '_blank');
        break;
      case 'github':
        window.open(contactInfo.github, '_blank');
        break;
      default:
        break;
    }
  };

  // Animation variants for container and items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.section 
      className="contact-section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out through any of these platforms</p>
      </div>

      <motion.div className="contact-grid" variants={containerVariants}>
        {/* Phone Contact Card */}
        <motion.div 
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleContactClick('phone')}
        >
          <div className="card-content">
            <Phone className="contact-icon" />
            <h3>Phone</h3>
            <p>{contactInfo.phone}</p>
            <ExternalLink className="external-link" />
          </div>
        </motion.div>

        {/* Email Contact Card */}
        <motion.div 
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleContactClick('email')}
        >
          <div className="card-content">
            <Mail className="contact-icon" />
            <h3>Email</h3>
            <p>{contactInfo.email}</p>
            <ExternalLink className="external-link" />
          </div>
        </motion.div>

        {/* LinkedIn Contact Card */}
        <motion.div 
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleContactClick('linkedin')}
        >
          <div className="card-content">
            <Linkedin className="contact-icon" />
            <h3>LinkedIn</h3>
            <p>Professional Profile</p>
            <ExternalLink className="external-link" />
          </div>
        </motion.div>

        {/* GitHub Contact Card */}
        <motion.div 
          className="contact-card"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleContactClick('github')}
        >
          <div className="card-content">
            <Github className="contact-icon" />
            <h3>GitHub</h3>
            <p>Code Repository</p>
            <ExternalLink className="external-link" />
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;