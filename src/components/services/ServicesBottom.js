import React from 'react';

// Import images from assets
import leftImage from '../../assets/images/services/mob1.svg';
import centerImage from '../../assets/images/services/lap1.svg';
import rightImage from '../../assets/images/services/mob2.svg';

const ButtonGroup = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center h-screen mt-[-10vh] px-10 lg:px-20">
      {/* Left Button and Image */}
      <div className="flex flex-col items-center mx-8 mb-12 lg:mb-0">
        <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
          Analytic Dashboard
        </button>
        <img
          src={leftImage}
          alt="Left Service"
          className="mt-4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-128 lg:h-128" // Responsive sizes
        />
      </div>

      {/* Center Button and Image */}
      <div className="flex flex-col items-center mx-8 mb-12 lg:mb-0">
        <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
          Billing Software
        </button>
        <img
          src={centerImage}
          alt="Center Service"
          className="mt-4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-128 lg:h-128" // Responsive sizes
        />
      </div>

      {/* Right Button and Image */}
      <div className="flex flex-col items-center mx-8">
        <button className="bg-[#1c1c1c] shiny-effect text-white py-2 px-6 rounded-lg font-poppins-medium">
          Build Website
        </button>
        <img
          src={rightImage}
          alt="Right Service"
          className="mt-4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-128 lg:h-128" // Responsive sizes
        />
      </div>
    </div>
  );
};

export default ButtonGroup;
