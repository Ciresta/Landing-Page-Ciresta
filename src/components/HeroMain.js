import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

const HeroSection = () => {
  return (
    <div className="bg-custom min-h-screen"> 
      <Navbar />
      <Hero />
    </div>
  );
};

export default HeroSection;
