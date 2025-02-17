// Import necessary dependencies and styles
import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Code, Rocket, MessageCircle, GraduationCap, Clock } from 'lucide-react';
import './faq.css';
import React from 'react';


const Faq = () => {
  // FAQ data with questions, answers, and corresponding icons
  const faqData = [
    {
      id: 1,
      icon: <Briefcase />,
      question: "What type of projects do you typically work on?",
      answer: "I specialize in full-stack web development with a focus on React and Node.js applications. My projects range from e-commerce platforms to data visualization dashboards. I have particular expertise in building responsive, accessible web applications with modern UI/UX principles. Some notable projects include a real-time analytics dashboard for a fintech startup and a custom CMS for a digital publishing company."
    },
    {
      id: 2,
      icon: <Code />,
      question: "What technologies are you most experienced with?",
      answer: "My core tech stack includes React, Node.js,Express.js. I'm proficient in modern frontend technologies like Next.js, Tailwind CSS, and Framer Motion for animations. On the backend, I work with Express.js, GraphQL, and various AWS services."
    },
    {
      id: 3,
      icon: <Rocket />,
      question: "Are you available for freelance work?",
      answer: "Yes, I'm available for freelance projects! I typically take on projects that last 3-6 months, though I'm open to both shorter and longer engagements. I can work remotely and collaborate across different time zones. I offer services including full-stack development, technical consultation, and code reviews. Let's discuss your project needs!"
    },
    {
      id: 4,
      icon: <MessageCircle />,
      question: "How can we collaborate on a project?",
      answer: "The best way to start is by sending me an email with your project details. I'll schedule a consultation call to discuss your requirements, timeline, and budget. I follow an agile development process with regular check-ins and updates. I use tools like Jira for project management and GitHub for version control, ensuring transparent communication throughout the project lifecycle."
    },
    {
      id: 5,
      icon: <GraduationCap />,
      question: "What is your educational background?",
      answer: "I hold a Bachelor's degree in Computer Science with a minor in UI/UX Design. I'm constantly learning and have completed several professional certifications. I regularly attend tech conferences and contribute to open-source projects to stay current with industry trends."
    },
    {
      id: 6,
      icon: <Clock />,
      question: "What's your typical project timeline?",
      answer: "Project timelines vary based on complexity and requirements. A typical medium-sized web application takes 2-3 months from conception to deployment. I break down projects into sprints, with deliverables every 2 weeks. This includes planning, development, testing, and deployment phases. I always include time for revisions and client feedback in my project timelines."
    }
  ];

  // State to track which FAQ item is currently expanded
  const [activeId, setActiveId] = useState(null);

  // Function to toggle FAQ items open/closed
  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Learn more about my work, process, and expertise</p>
      </div>
      
      {faqData.map((faq) => (
        <motion.div 
          key={faq.id} 
          className="faq-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: faq.id * 0.1 }}
        >
          <motion.button
            className="faq-question-button"
            onClick={() => toggleFAQ(faq.id)}
            initial={false}
          >
            <div className="faq-icon">
              {faq.icon}
            </div>
            <span className="faq-question-text">{faq.question}</span>
            <motion.div
              animate={{ rotate: activeId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="faq-chevron"
            >
              <ChevronDown />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {activeId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="faq-answer-container"
              >
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default Faq;