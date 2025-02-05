import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {  FaBars, FaTimes } from "react-icons/fa"
import {Admin} from '../../assets/Images/photo.jpg'
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img src={Admin} alt="User" />
              </motion.div>
            </Link>
          </div>
          <div className="navbar-links-desktop">
            <div className="navbar-links">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/experience">Experience</NavLink>
              <NavLink to="/projects">Projects</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
          <div className="navbar-menu-button">
            <button onClick={toggleMenu} className="menu-button">
              {isOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className="navbar-mobile"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="navbar-links-mobile">
          <MobileNavLink to="/" onClick={toggleMenu}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/experience" onClick={toggleMenu}>
            Experience
          </MobileNavLink>
          <MobileNavLink to="/projects" onClick={toggleMenu}>
            Projects
          </MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMenu}>
            Contact
          </MobileNavLink>
        </div>
      </motion.div>
    </nav>
  )
}

const NavLink = ({ to, children }) => (
  <Link to={to} className="nav-link">
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  </Link>
)

const MobileNavLink = ({ to, onClick, children }) => (
  <Link to={to} onClick={onClick} className="nav-link-mobile">
    <motion.div whileHover={{ scale: 1.0 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  </Link>
)

export default Navbar

