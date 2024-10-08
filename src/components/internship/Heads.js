import React from "react";
import BackgroundSVG from '../../assets/images/internship/internship-bg.svg';
import LogoSVG from '../../assets/images/logo.svg';

const Heads = () => {
  return (
    <div className="relative bg-[#121212] text-white flex items-center font-poppins h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${BackgroundSVG})`,
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="relative z-10 w-full max-w-8xl mx-auto p-8 lg:p-12 flex justify-start">
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-left items-start">
          <img src={LogoSVG} alt="Ciresta Technologies Logo" className="w-16 h-16 mb-6" />
          <p className="text-4xl text-gray-300 mb-2 poppins-light">Learn to solve Real-time problems with</p>
          <h1 className="text-3xl lg:text-4xl poppins-light mt-1 text-white">"Ciresta Technologies"</h1>
          <h2 className="text-3xl lg:text-6xl poppins-semibold mt-2 text-white">Internship Program</h2>
          <a
            href="#register"
            className="inline-block ciresta-bg text-white text-center py-2 px-4 rounded-lg shadow-lg w-40 text-sm mt-4 font-medium"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Heads;
