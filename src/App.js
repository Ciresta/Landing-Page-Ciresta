// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroMain from './components/HeroMain';
import Navbar from './components/Navbar'; // Import Navbar
import Footer from './components/Footer'; // Import Footer
import Internship from './components/internship/Internship';
import About from './components/MainAbout';
import MainServices from './components/MainServices';
import Contact from './components/Contact';
import ScrollToTop from './components/Scroll'; 

function App() {
  return (
    <Router>
      <ScrollToTop> 
        <div className="App">
          <Navbar /> {/* Navbar is now common to all pages */}
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
            <Route path="/internships" element={<Internship />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<MainServices />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer /> {/* Footer is now common to all pages */}
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
