import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroMain from './components/HeroMain';
import Team from './components/Team';
import OneStepSolution from './components/OneStepSolution';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import CoreValues from './components/CoreValues';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
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

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
