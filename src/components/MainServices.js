import React from 'react';
import heroImage from '../assets/images/services/services_hero.svg';
import Navbar from './Navbar';
import Footer from './Footer';
import Services from './Services';
import ServicesDown from './ServicesBottom';

const MainServices = () => {
  return (
    <div className="relative">
      <Navbar />

      <section className="relative">
        <img 
          src={heroImage} 
          alt="Services Hero" 
          className="w-full h-auto object-cover" 
        />
      </section>

      {/* Section for the two paragraphs */}
      <section className="flex flex-col md:flex-row justify-between px-4 md:px-10 py-10">
        {/* Left-aligned text */}
        <div className="max-w-md w-full md:w-1/2 mb-6 md:mb-0 text-center">
          <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed">
            To <span className="font-semibold">empower businesses</span> with customized solutions 
            that enhance efficiency and promote sustainable growth.
            <br/>
            <span className="italic text-indigo-400">~ ciresta</span>
          </p>
        </div>

        {/* Right-aligned text */}
        <div className="max-w-md w-full md:w-1/2 text-center">
          <p className="text-base md:text-lg font-light text-gray-300 leading-relaxed">
            To <span className="font-semibold">empower businesses</span> with customized solutions 
            that enhance efficiency and promote sustainable growth.
            <br/>
            <span className="italic text-indigo-400">~ ciresta</span>
          </p>
        </div>

      </section>
        <Services />
      <ServicesDown/>
      <Footer />
    </div>
  );
};

export default MainServices;
