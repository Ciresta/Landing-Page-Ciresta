import React from 'react';
import HeroMain from './components/HeroMain';
import Team from './components/Team';
import OneStepSolution from './components/OneStepSolution';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import CoreValues from './components/CoreValues';

function App() {
  return (
    <div className="App">
      <HeroMain/>
      <CoreValues/>
      <OneStepSolution/>
      <Services/>
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
