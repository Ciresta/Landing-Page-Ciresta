// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroMain from './components/HeroMain';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
// import Internship from './components/internship/Internship';
import About from './components/MainAbout';
import MainServices from './components/MainServices';
import Contact from './components/Contact';
import FAQ from './components/FAQs';
import ScrollToTop from './components/Scroll'; 
import GoTop from "react-scroll-to-top";
import { FaChevronUp } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <ScrollToTop> 
        <div className="App">
         {/* <GoTop smooth color="#6f00ff" /> */}
         <GoTop
  smooth
  component={<FaChevronUp style={{ fontSize: '20px', color: '#6f00ff' }} />} // Use a custom icon
  style={{
    backgroundColor: '#fff',
    borderRadius: '50%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    fontFamily: 'Arial, sans-serif',
    color: '#6f00ff',
    zIndex: '50',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
/>
          <Navbar /> 
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroMain />
                  {/* <CoreValues />
                  <OneStepSolution />
                  <Services />
                  <Team />
                  <Contact />
                   */}
                </>
              }
            />
            {/* <Route path="/internships" element={<Internship />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<MainServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQ />} />
          </Routes>
          <Footer /> {/* Footer is now common to all pages */}
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
