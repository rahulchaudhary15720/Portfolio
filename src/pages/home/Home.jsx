import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Frontend from '../../assets/Animation/Frontend.json';
import Lottie from 'lottie-react';
import './home.css';


// const defaultOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: Frontend,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice',
//   },
// };

const Home = () => {
  const tags = ['X', '-', 'Freelance', '-', 'X', '-', 'Creative', '-', 'X', '-', 'Developer', '-', 'X', '-', 'Designer','-'];

  return (
    <>
      <div className="full-width-layout">
        <motion.div 
          className="hero-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
                  {/* Existing HTML Content Section */}
                  <motion.section 
            className="content-wrapper"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 50, 
              damping: 10 
            }}
          >
            <h1 className="huge-title">
              <span className="row active">
                <span className="line">
                  {['R', 'A','H','U','L' ].map((letter, index) => (
                    <motion.span 
                      key={index} 
                      className="letter"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1, 
                        type: "spring", 
                        stiffness: 100 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </span>
              {/* <span className="row active">
                <span className="line">
                  {['S', 'T', 'A', 'C', 'K'].map((letter, index) => (
                    <motion.span 
                      key={index} 
                      className="letter"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.4, 
                        type: "spring", 
                        stiffness: 100 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </span> */}
              <span className="row active">
                <span className="line">
                  {['C', 'H', 'O', 'U', 'D', 'H', 'A', 'R', 'Y'].map((letter, index) => (
                    <motion.span 
                      key={index} 
                      className="letter"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        delay: index * 0.1 + 0.8, 
                        type: "spring", 
                        stiffness: 100 
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </span>
            </h1>
            
            <motion.div 
              className="tags"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: -1 }}
            >
<div className="marquee-wrapper">
    <div className="marquee">
        <div className="marquee-scroll">
            {tags.map((tag, index) => (
                <React.Fragment key={index}>
                    <span className="tag">{tag}</span>
                    <span className="icon">
                        <span className="inner-icon"></span>
                    </span>
                </React.Fragment>
            ))}
        </div>
        {/* Duplicate content for seamless effect */}
        <div className="marquee-scroll">
            {tags.map((tag, index) => (
                <React.Fragment key={`duplicate-${index}`}>
                    <span className="tag">{tag}</span>
                    <span className="icon">
                        <span className="inner-icon"></span>
                    </span>
                </React.Fragment>
            ))}
        </div>
    </div>
</div>

            </motion.div>
          </motion.section>




          {/* Introduction Section */}
          <motion.section 
            className="intro-section"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 40, 
              damping: 20 
            }}
          >
            <div className="intro-content">
            {/* <Lottie options={defaultOptions} height="100%" width="100%" /> */}
              <motion.h2
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <Lottie animationData={Frontend} loop={true} autoplay={true} style={{ height: 'auto', width: '100%' , maxWidth:'400px'}} />

                I am <span style={{ color: "#d92836" }}>Frontend developer</span>
              </motion.h2>
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3>A passionate freelance creative developer and designer 
                dedicated to crafting innovative digital experiences. 
                With a blend of technical skills and creative vision, 
                I transform ideas into compelling visual stories.
                </h3> 
              </motion.p>
              <motion.div 
                className="cta-buttons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  
                >
                  <Link to="./projects" >View My Achivements </Link>
                </motion.button>
                <motion.button 
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                   <Link to="/contact" style={{textDecoration:"none",color:"#d92836"}}>Contact Me </Link>
                </motion.button>
              </motion.div>
            </div>
          </motion.section>


        </motion.div>
      </div>
    </>
  );
};

export default Home;
