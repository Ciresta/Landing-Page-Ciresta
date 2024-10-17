import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroMain from './components/HeroMain';
import Team from './components/Team';
import OneStepSolution from './components/OneStepSolution';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import CoreValues from './components/CoreValues';
import Internship from './components/internship/Internship';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <HeroMain />
                <CoreValues />
                <OneStepSolution />
                <Services />
                <Team />
                <Contact />
                <Footer />
              </>
            }
          />

          <Route path="/internships" element={<Internship />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
