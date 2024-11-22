import React, { useEffect, useState } from "react";
import LogoSVG from '../../assets/images/logo.svg';
import BackgroundImage from '../../assets/images/internship/internship-bg-new.jpg'; 


const Heads = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`relative text-white flex items-center font-poppins rounded-lg mb-[-30px] ${isDesktop ? 'h-screen' : ''}`}
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-55"></div>

      <div className="relative z-10 w-full max-w-8xl mx-auto p-4 sm:p-8 lg:p-12 flex justify-start">
        <div className="flex flex-col justify-center w-full lg:w-1/2 text-left items-start h-full p-4 sm:p-6 md:p-8 rounded-md">
          <img src={LogoSVG} alt="Ciresta Technologies Logo" className="w-12 h-12 mb-2 sm:w-16 sm:h-16 sm:mb-6" />
          <p className="text-lg sm:text-2xl lg:text-4xl text-gray-300 mb-1 sm:mb-2 poppins-light">Learn to solve Real-time problems with</p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl poppins-light-italic mt-1 text-white">"Ciresta Technologies"</h1>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl poppins-semibold mt-1 sm:mt-2 text-white">Internship Program</h2>
          <a
            href="https://forms.gle/UbhYX7DtCmNvxuDx5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block ciresta-bg text-white text-center py-2 px-4 rounded-lg shadow-lg w-32 sm:w-40 text-xs sm:text-sm mt-4 font-medium"
          >
            Apply Now →
          </a>
          <p className="text-lg text-red-500 mb-1 mt-4 sm:mb-2 poppins-light-italic">Internship closes soon!</p>
        </div>
      </div>
    </div>
  );
};

export default Heads;
