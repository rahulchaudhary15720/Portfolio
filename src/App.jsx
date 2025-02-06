import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Navbar from "../src/components/navbar/Navbar";
import Home from "../src/pages/home/Home";
import Experience from "../src/pages/experience/Experience";
import Projects from "../src/pages/projects/Projects";
import Contact from "../src/pages/contact/Contact";
import TopProject from "./components/TopProject/TopProject";
import Technology from "./components/technology/Technology";
import Faq from "./components/FAQ/Faq";
import './App.css';
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="m">
          <Navbar />
          <main className="route">
            <Routes>
              {/* Home route should include all components you want on the home page */}
              <Route path="/" element={
                <>
                  <Home />
                  <Experience />
                  <TopProject />
                  <Technology />
                  <Faq />
                </>
              } />
              
              {/* Other routes will only show their specific components */}
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;