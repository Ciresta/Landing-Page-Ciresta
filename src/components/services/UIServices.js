import React from 'react';
import workpc from '../../assets/images/services/servicepc.png'; 
import backgroundImage from '../../assets/images/services/work.svg'; 

const UIServices = () => {
  return (
    <div className="container mx-auto py-10 px-4 md:px-8 lg:px-16 text-white font-poppins">
      <div className="relative mt-0 md:mt-[10rem] mb-6 flex justify-center"> 
        <img 
          src={backgroundImage} 
          alt="Background" 
          className="absolute w-full h-[200px] md:h-[300px] lg:h-[500px] bottom-1/2 object-cover" // Adjust height for mobile view
        /> 

        <img 
          src={workpc} 
          alt="Work PC" 
          className="relative w-full max-w-[1200px] h-[400px] md:h-[500px] lg:h-[600px] object-contain" 
        /> 
      </div>
      
      <div className="mb-10 flex flex-col justify-center items-center md:ml-20">
        <h2 className="text-4xl font-poppins-medium mb-6 text-center md:text-left">UI/UX Design</h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
            Landing Page
          </button>
          <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
            Websites
          </button>
          <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
            Mobile App Design
          </button>
        </div>
      </div>

      <div className="text-left flex flex-col justify-center items-center md:ml-20">
        <h2 className="text-4xl font-poppins-medium mb-6 text-center md:text-left">Graphic Design</h2>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
            Banners
          </button>
          <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
            Flyer/ Posters
          </button>
          <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
            Social Media Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default UIServices;
