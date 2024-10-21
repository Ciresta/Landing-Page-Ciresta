import React from 'react';
import aboutUsImg from '../assets/images/about/about-hero.svg'; 
import companyBg from '../assets/images/about/company-bg.svg'; 
import image1 from '../assets/images/about/info/Group 48095356(1).svg';
import image2 from '../assets/images/about/info/Group 48095357(1).svg';
import image3 from '../assets/images/about/info/Group 48095355.svg';
import image4 from '../assets/images/about/info/Group 48095348.svg';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="relative">
      <Navbar />
      <section className="relative">
        <img 
          src={aboutUsImg} 
          alt="About Us Banner"  // Dummy alt text
          className="w-full h-auto object-cover" 
        />
        <img 
          src={companyBg} 
          alt="Company Background" // Dummy alt text
          className="w-full h-auto object-cover" 
        />
        
        <div className="absolute inset-0 bg-transparent z-10" />
      </section>

      <section className="py-12">
        <h1 className="text-3xl text-white sm:text-4xl md:text-5xl font-semibold poppins-medium">
          Meet the <span className="ciresta-color">Lead</span>
        </h1>
        <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg poppins-light">
          Everything you need to <span className="font-bold">grow digitally</span>, we provide the services.
        </p>
      </section>

      {/* Grid section for 4 images */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div className="bg-black flex items-center justify-center relative">
          <img 
            src={image1} 
            alt="Team Member 1"  // Dummy alt text
            className="object-cover w-3/4 h-auto" 
          />
          <div className="absolute inset-0 bg-black opacity-0" />
        </div>

        <div className="bg-black flex items-center justify-center relative">
          <img 
            src={image2} 
            alt="Team Member 2"  // Dummy alt text
            className="object-cover w-3/4 h-auto" 
          />
          <div className="absolute inset-0 bg-black opacity-0" />
        </div>

        <div className="bg-black flex items-center justify-center relative">
          <img 
            src={image3} 
            alt="Team Member 3"  // Dummy alt text
            className="object-cover w-3/4 h-auto" 
          />
          <div className="absolute inset-0 bg-black opacity-0" />
        </div>

        <div className="bg-black flex items-center justify-center relative">
          <img 
            src={image4} 
            alt="Team Member 4"  // Dummy alt text
            className="object-cover w-3/4 h-auto" 
          />
          <div className="absolute inset-0 bg-black opacity-0" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
