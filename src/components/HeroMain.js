import React from 'react';
import Hero from './Hero';

import CoreValues from './CoreValues';
import OneStepSolution from './OneStepSolution';
import Services from './Services';
import Team from './Team';


const HeroSection = () => {
  return (
    <div className="">
       
      <Hero />
      <CoreValues />
      <OneStepSolution />
      <Services />
      <Team />
      {/* <Contact /> */}
      
    </div>
  );
};

export default HeroSection;
