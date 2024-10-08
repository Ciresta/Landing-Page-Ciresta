import React from "react";
import BackgroundSVG from '../../assets/images/internship/internship-bg.svg'; // Import your SVG background
import LogoSVG from '../../assets/images/logo.svg'; // Import your Logo SVG

const Heads = () => {
  return (
    <div className="relative bg-[#121212] text-white flex items-center font-poppins h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundSVG})`,
          backgroundSize: 'cover', // Ensures the image covers the entire area
          height: '100%', // Full height
          width: '100%', // Full width
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-30"></div> {/* Increase opacity for better contrast */}
      
      <div className="relative z-10 w-full max-w-8xl mx-auto p-8 lg:p-12 flex justify-start">
        <div className="flex flex-col justify-center w-full lg:w-/2 text-left items-start">
          <img src={LogoSVG} alt="Ciresta Technologies Logo" className="w-16 h-16 mb-6" />

          <p className="text-4xl text-gray-300 mb-2 poppins-medium">
            Learn to solve Real-time problems with
          </p>

          <h1 className="text-3xl lg:text-4xl poppins-medium mt-1 text-white">
            "Ciresta Technologies"
          </h1>

          <h2 className="text-3xl lg:text-6xl font-bold mt-2 text-white">
            Internship Program
          </h2>

          <a
            href="#register"
            className="inline-block bg-[#5F5AF6] text-white text-center py-2 px-4 rounded-lg shadow-lg text-sm mt-4 font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heads;
