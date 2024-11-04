import React from 'react';
import Hero from './Hero';

import CoreValues from './CoreValues';
import OneStepSolution from './OneStepSolution';
import WhyChooseUs from './WhyChooseUs';
import FAQs from './FAQs';


const HeroSection = () => {
  return (
    <div className="">
       
      <Hero />
      <CoreValues />
      <OneStepSolution />
      <WhyChooseUs />
      <FAQs />

    </div>
  );
};

export default HeroSection;
