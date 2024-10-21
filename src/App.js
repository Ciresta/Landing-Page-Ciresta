import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroMain from './components/HeroMain';
import Footer from './components/Footer';
import Internship from './components/internship/Internship';
import About from './components/MainAbout';
import MainServices from './components/MainServices';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* <Navbar /> */}
                <HeroMain />
                {/* <CoreValues />
                <OneStepSolution />
                <Services />
                <Team />
                <Contact />
                 */}
                <Footer />
              </>
            }
          />

          <Route path="/internships" element={<Internship />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<MainServices />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
