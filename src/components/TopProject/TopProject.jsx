import React, { useState } from "react";
import { motion } from "framer-motion";
import img from '../../assets/Images/CarRental.png'; // Replace with your actual car image path
import "./topProject.css";

const TopProject = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="car-details-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div 
        className="car-image"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.img 
          src={img} 
          alt="Car" 
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          className={isHovered ? "blurred" : ""}
        />
        {isHovered && (
          <motion.a 
            href="https://car-rental-rust-mu.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="car-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            Visit Now →
          </motion.a>
        )}
      </div>

      <div className="car-info">
        <h3>2025 Luxury Sedan</h3>
        <p>
          This luxury sedan combines elegance, comfort, and advanced technology. 
          It's perfect for both city drives and long-distance journeys, offering 
          smooth handling and top-notch features. Equipped with a premium sound system, 
          intuitive navigation, and an eco-friendly engine, it's the perfect choice for those 
          who value both style and efficiency.
        </p>

        <ul>
          <li><strong>Availability:</strong> Available for daily, weekly, and monthly rentals</li>
          <li><strong>Booking Process:</strong> Easy online booking with instant confirmation</li>
          <li><strong>Free Delivery:</strong> Free delivery within 20 miles of the city center</li>
          <li><strong>Insurance:</strong> Comprehensive insurance coverage included</li>
          <li><strong>Customer Support:</strong> 24/7 customer support for any queries</li>
          <li><strong>Pick-Up/Drop-Off:</strong> Convenient pick-up and drop-off at locations of your choice</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TopProject;
