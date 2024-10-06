import React from 'react';
import heroImg from "../assets/images/hero/hero-img.svg";
import logoImg from "../assets/images/logo.svg";
import '../App.css';

const Hero = () => {
  return (
    <section className="text-center py-16">
      <div className="mb-8">
        <img src={logoImg} alt="Logo" className="mx-auto h-20 md:h-24 lg:h-28" />
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl text-white poppins-light">Comprehensive Digital Solutions</h1>
      <h2 className="text-3xl md:text-4xl lg:text-5xl mt-4 ciresta-color poppins-bold">Design, Develop, & Maintain</h2>
      <p className="mt-2 ciresta-color poppins-regular text-base md:text-lg">#Build with us</p>

      <div className="flex justify-center mt-12 space-x-6">
        <img src={heroImg} alt="Phone" className="h-32 md:h-48 lg:h-60" />
      </div>

      <section className="text-center mt-16">
        <p className="text-2xl md:text-3xl lg:text-4xl italic text-white poppins-regular-italic">
          "Your vision, our <span className="ciresta-color">expertise</span>"
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl italic text-gray-500 mt-2 poppins-regular-italic">"Your needs, our code"</p>
      </section>
    </section>
  );
};

export default Hero;
