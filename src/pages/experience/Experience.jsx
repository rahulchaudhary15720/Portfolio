import React from 'react';
import { motion } from "framer-motion"
import {  Calendar, Briefcase, ChevronRight, GraduationCap } from "lucide-react"
import './experience.css'

const Experience=()=> {
  return (
    <div className="internship-experience">
      <h2>My Frontend Internship Experience</h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="experience-card"
      >
        <div className="company">
          <Briefcase className="icon" />
          <h3>Grras Solution</h3>
        </div>

        <div className="duration">
          <Calendar className="icon" />
          <p>Duration: 2 months</p>
        </div>

        <div className="responsibilities">
          <h4>Key Responsibilities:</h4>
          <ul>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              Developed responsive user interfaces using React and Tailwind CSS
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
              Collaborated with the design team to implement pixel-perfect designs
            </motion.li>
            <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
              Optimized application performance and loading times
            </motion.li>
          </ul>
        </div>

        <div className="technologies">
          <h4>Technologies Used:</h4>
          <div className="tech-tags">
            {["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 * index }}
                className="tech-tag"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="key-learnings"
        >
          <h4>
            <GraduationCap className="icon" />
            Key Learnings
          </h4>
          <p>
            During my internship, I gained valuable experience in modern frontend development practices, improved my
            problem-solving skills, and learned how to work effectively in a team environment.
          </p>
        </motion.div>

        <motion.a href="https://car-rental-rust-mu.vercel.app/" className="projects-link" whileHover={{ x: 5 }}>
          View my projects <ChevronRight className="icon" />
        </motion.a>
      </motion.div>

      {/* <motion.div className="footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <Code className="icon" />
        <span>Coded with passion and creativity</span>
      </motion.div> */}
    </div>
  )
}

export default Experience