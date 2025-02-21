import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  MailIcon,
  ArrowUpIcon
} from 'lucide-react';
import './footer.css'

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "your.email@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Let's Connect</h3>
          <div className="social-links">
            <a href="https://github.com/rahulchaudhary15720" target="_blank" rel="noopener noreferrer" className="social-link">
              <GithubIcon size={24} />
            </a>
            <a href="https://www.linkedin.com/in/rahul-choudhary-5b0152260/" target="_blank" rel="noopener noreferrer" className="social-link">
            <LinkedinIcon size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">
              <TwitterIcon size={24} />
            </a>
            <button onClick={handleCopyEmail} className="email-button">
              <MailIcon size={24} />
              <span className="tooltip">{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
          <Link to="/projects">Projects</Link>
  <Link to="/experience">Experience</Link>
  <Link to="/technologies">Skills</Link>
  <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p>Available for freelance opportunities</p>
          <p>Based in Your Location</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rahul Choudhary. All rights reserved.</p>
        <button onClick={scrollToTop} className="scroll-top">
          <ArrowUpIcon size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;